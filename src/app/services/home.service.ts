import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError }  from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public getAllBook(body) {
        const url = environment.API_ENDPOINT + 'home/getAllBook';
        const headers = new HttpHeaders();

        return this.http.post<any>(url, body, { headers })
            .pipe(catchError(this.handleError));
    }

    handleError(error) {
        return throwError(error || 'Server Error');
    }
}
