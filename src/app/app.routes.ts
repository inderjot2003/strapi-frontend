import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ReviewsComponent } from './modules/reviews/reviews.component';
import { ReviewDetailComponent } from './modules/review-detail/review-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:slug', component: ReviewsComponent },
  { path: 'review/:slug', component: ReviewDetailComponent },
];