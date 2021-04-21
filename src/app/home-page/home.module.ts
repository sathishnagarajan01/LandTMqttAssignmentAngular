import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page.component';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
