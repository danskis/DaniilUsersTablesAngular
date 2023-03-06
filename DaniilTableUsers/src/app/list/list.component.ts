import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  emailSub: Subscription;

  constructor(private appService: AppService) { }

  ngOnDestroy(): void {
    this.emailSub.unsubscribe();
  }

  ngOnInit(): void {
    this.emailSub = this.appService.sendEmail.subscribe(email => {
      console.log('entré');
    })
  }

}
