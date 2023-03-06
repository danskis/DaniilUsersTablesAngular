import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared.module';



@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})

export class AuthModule { }




