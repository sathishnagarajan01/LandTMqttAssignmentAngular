import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent implements OnInit {
    public selectedBook: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.selectedBook = window.history.state['bookObj'];
        });
        console.log(this.selectedBook);
    }

    public authorClick() {
        this.router.navigate(['/author']);
    }

}
