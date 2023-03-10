import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService, TableInfo } from '../app.service';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  inputValue: string;
  emailSub: Subscription;
  emailName: string = sessionStorage.getItem('email');
  displayedColumns: string[] = ['email', 'title', 'content'];
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

    //Redirecting if there's not a logged email
    if(this.emailName == null){
      this.router.navigate(['auth']);
    };

    this.emailSub = this.appService.emailSubject.subscribe(email => {

    //Pushing the 'database' to be displayed in the table
      this.appService.getEmails()
      .pipe(
        map(response => {
          return response.filter(element => element.email == this.emailName);          
      })
      ).subscribe(data => {
        this.dataSource.data = data;
      });

    });

  }

  filter(){
    this.dataSource.filter = this.inputValue.trim().toLowerCase();
  }

}
