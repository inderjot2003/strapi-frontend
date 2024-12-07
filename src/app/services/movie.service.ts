import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:1337/api'; // Update with your Strapi URL

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies?populate=*`);
  }

  getMovieBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies`, {
      params: { filters: `slug:$eq:${slug}` },
    });
  }

  getMovieReviews(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews?filters[movies][slug][$eq]=${slug}`);
  }

  getReviewBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews?filters[slug][$eq]=${slug}`);
  }
}