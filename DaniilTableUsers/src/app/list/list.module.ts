import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ListComponent } from './list.component';




@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})

export class ListModule { }




