import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatButtonModule
    ]
})
export class SharedModule { }
