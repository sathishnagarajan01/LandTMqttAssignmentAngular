import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailPageComponent } from './book-detail-page.component';


const routes: Routes = [
    {
        path: '',
        component: BookDetailPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailRoutingModule { }
