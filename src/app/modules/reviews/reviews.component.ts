
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  movieSlug: string = '';
  movieName: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieSlug = this.route.snapshot.paramMap.get('slug') || '';
    this.movieName = this.movieSlug.charAt(0).toUpperCase() + this.movieSlug.slice(1);
    this.movieService.getMovieReviews(this.movieSlug).subscribe((data) => {
      console.log("reviews: ", data.data);
      
      this.reviews = data.data;
  });
  }
}