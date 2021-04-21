import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home-page/home.module').then(m => m.HomeModule)
    },
    {
        path: 'bookDetails',
        loadChildren: () => import('./book-detail-page/book-detail.module').then(m => m.BookDetailModule)
    },
    {
        path: 'author',
        loadChildren: () => import('./authorPage/author.module').then(m => m.AuthorModule)
    },
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
