import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
} 
from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
    ]
})
export class AppMaterialModule { }
