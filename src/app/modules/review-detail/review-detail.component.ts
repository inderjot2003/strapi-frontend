import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-review-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss'],
})
export class ReviewDetailComponent implements OnInit {
  review: any = null;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.movieService.getReviewBySlug(slug).subscribe((data) => {
      
      this.review = data.data[0];
      console.log('review data:', this.review);

    });
  }

  goBack() {
    this.location.back();
  }
}