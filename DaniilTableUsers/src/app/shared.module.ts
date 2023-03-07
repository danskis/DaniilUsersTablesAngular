import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
    declarations: [
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class SharedModule { }
