import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailPageComponent } from './book-detail-page.component';
import { AppMaterialModule } from '../app-material.module';


@NgModule({
  declarations: [
      BookDetailPageComponent
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    AppMaterialModule
  ]
})
export class BookDetailModule { }
