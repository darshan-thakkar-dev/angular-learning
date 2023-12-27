import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import {fake_movies} from '../models/fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements  OnInit{

  movie: Movie = {
    id:1,
    name: "Sajan chale sasural",
    releaseYear: 1990
  }
  movies = fake_movies;
  
  selectedMovie: Movie = fake_movies[0];

  show = false;
  showHideButton: string = 'Show';

  constructor(){
    // this.showHideButton = 'Show';
  }

    // this.showHideButton = 'Show';
  ngOnInit(){
    // this.showHideButton = 'Show';
  }

  onSelected(clickedMovie: Movie){
      this.selectedMovie = clickedMovie;
  }

  onClickShowBtn(show: boolean){
    this.show = !show;
    this.showHideButton = show? 'Hide': 'Show';
    console.log('clicked');
  }
}
