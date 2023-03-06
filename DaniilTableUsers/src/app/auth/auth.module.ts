import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { AuthComponent } from './auth.component';


@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})

export class AuthModule { }




