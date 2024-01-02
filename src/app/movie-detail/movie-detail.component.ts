import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  @Input()
  movies: Movie[] | undefined;

  show: boolean = false;
  selectedMovie: Movie ={
    id:0,
    name:'Dummy',
    releaseYear: undefined
  };
  
  onClickDetail(movie: Movie, show: boolean){
    this.show = !show;
    this.selectedMovie = movie;
    alert('Movie Name = '+ this.selectedMovie.name)
  }
}
