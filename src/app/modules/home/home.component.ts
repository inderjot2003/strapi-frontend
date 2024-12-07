import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  assetUrl = environment.baseUrl;
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data) => {
      console.log("data: ", data);
      
      this.movies = data.data;
    });
  }

  goToMovie(slug: string) {
    this.router.navigate([`/movie/${slug}`]);
  }
}