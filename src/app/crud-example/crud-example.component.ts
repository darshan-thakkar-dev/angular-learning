import { Component } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.css']
})
export class CrudExampleComponent {
    movies: Movie[] | undefined;
    movieName: string = '';
    movieId : number | undefined;
    releaseYear : number | undefined;
    show: boolean = false;
    selectedMovie: Movie ={
      id:0,
      name:'Dummy',
      releaseYear: undefined
    };
    
    onClickSubmit(){
      console.log('clicked')
      let movie : Movie = {
        id: this.movieId,
        name: this.movieName,
        releaseYear:this.releaseYear
      }      
      console.log(movie);
      if(!this.movies){
          this.movies = [];
      }
      this.movies.push(movie);
      console.log(this.movies);
    }

    onClickDetail(movie: Movie, show: boolean){
      this.show = !show;
      this.selectedMovie = movie;
    }
}
