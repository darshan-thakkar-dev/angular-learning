import { Injectable } from '@angular/core';
import { fake_movies } from './models/fake-movies';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    // api call data return
    return fake_movies;
  }

  addMovie(movie: Movie){
    fake_movies.push(movie);
  }
}
