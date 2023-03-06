import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    console.log(form.value.email);
    this.appService.sendEmail.next(form.value.email);

    this.router.navigate(['list']);
  
  }

}
