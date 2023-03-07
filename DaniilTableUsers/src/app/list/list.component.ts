import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService, TableInfo } from '../app.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  inputValue: string;
  emailSub: Subscription;
  emailName: string = sessionStorage.getItem('email');
  displayedColumns: string[] = ['email', 'nickname', 'years'];
  getSource: TableInfo[] = [];
  dataSource : MatTableDataSource<TableInfo> = new MatTableDataSource<TableInfo>();
  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }

  constructor(private appService: AppService, private router: Router) { }

  ngOnDestroy(): void {
    this.emailSub.unsubscribe();
  }

  ngOnInit(): void {

    this.emailSub = this.appService.emailSubject.subscribe(email => {

      if(this.emailName == ''){
        sessionStorage.setItem('email', email);
      this.emailName = email;
      }

    //Pushing the 'database' to be displayed in the table
      this.appService.getEmails()
      .pipe(
        map(response => {
          response.forEach(element => {
            element.nickname = element.email.substring(0, element.email.indexOf('@'));
            element.years = element.email.length;
          })
          return response
      }))
      .subscribe(data => {
        data.unshift(
          {email: this.emailName, nickname: this.emailName.substring(0, this.emailName.indexOf('@')), years: this.emailName.length}
        )
        this.dataSource.data = data;

      });

    });

    //Redirecting if there's not a logged email
    if(this.emailName == ''){
      this.router.navigate(['auth']);
    };

  }

  filter(){
    this.dataSource.filter = this.inputValue.trim().toLowerCase();
  }

}
