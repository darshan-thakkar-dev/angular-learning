import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { fake_movies } from '../models/fake-movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.css']
})
export class CrudExampleComponent implements OnInit{
  
    // movies: Movie[] = fake_movies;
    movieName: string = '';
    movieId : number | undefined;
    releaseYear : number | undefined;
    show: boolean = false;
    selectedMovie: Movie ={
      id:0,
      name:'Dummy',
      releaseYear: undefined
    };

    movies: Movie[] | undefined;
  
    constructor(private movieService : MovieService){

    }

    ngOnInit(): void {
      this.getMoviesDetails();
    }

    getMoviesDetails(){
      this.movies = this.movieService.getMovies();
    }
    
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
      console.log('clicked')
      this.show = !show;
      this.selectedMovie = movie;
      // alert('Alert')
    }
}
