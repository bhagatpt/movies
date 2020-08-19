import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchurl='https://api.themoviedb.org/3/search/movie';
  detailsurl='https://api.themoviedb.org/3/movie/';
  apiKey = '83fdbe717e642f05c0797fc509391fe4';
 
  
  constructor(private http: HttpClient) { }
 
  searchMovie(title: string){
    return this.http.get(`${this.searchurl}?api_key=${this.apiKey}&language=en-US&query=${encodeURI(title)}&page=1&include_adult=false`).pipe(
      map(results => results['results'])
    );
  }


  getMovieDetails(id: any) {
  return this.http.get(`${this.detailsurl}${id}?api_key=${this.apiKey}&language=en-US`);
  }
}