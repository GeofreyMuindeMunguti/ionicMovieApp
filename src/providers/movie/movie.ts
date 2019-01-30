import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//83ea021885e4542683154c3c8b035124-API key
//731ca7dcfc6977ce67b793c1599c0d601582d6b7- Request Token
//0ec67773c0dbd655dcbaa2bb4a3ba5a8fe2bf2b9-session_id

@Injectable()
export class MovieProvider {

  url;
  vurl;
  eurl;
  
  constructor(public http: Http) {
  

  
    this.url = 'https://api.themoviedb.org/3/discover/movie?api_key=83ea021885e4542683154c3c8b035124&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1';
    this.vurl='https://api.themoviedb.org/3/movie/'
    this.eurl ='/videos?api_key=83ea021885e4542683154c3c8b035124&language=en-US';
    }
    getMovie()
    {
    return this.http.get(this.url)
    .map(res=>res.json());
    }
    getVideo(movie_id)
    {
      return this.http.get(this.vurl+movie_id+this.eurl)
      .map(res=>res.json());
    }
}
