import { Component ,ElementRef} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { StreamingMedia , StreamingVideoOptions, StreamingAudioOptions} from '@ionic-native/streaming-media';
import {MovieProvider } from '../../providers/movie/movie'; 
import {ViewPage } from '../view/view';
import { DeclareVarStmt } from '@angular/compiler';
import { StatusBar } from '@ionic-native/status-bar';


 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//83ea021885e4542683154c3c8b035124-API key
//731ca7dcfc6977ce67b793c1599c0d601582d6b7- Request Token
//0ec67773c0dbd655dcbaa2bb4a3ba5a8fe2bf2b9-session_id
 errorlog: any;
 movie:any;
 title:any;
 img:any;
 size:any;
 movies:any;
 show = [];
 moviedesc:any;
 imageurl = 'http://image.tmdb.org/t/p/w185';
 desc = document.getElementById('desc');
 movid:any;
 titleshow:any;
 movieshow:any;
  constructor(public navCtrl: NavController , public alertController: AlertController, private movieProvider: MovieProvider,public statusBar:StatusBar, private streamingMedia : StreamingMedia) {
    //this.play();
   this.getMovies();
   this.showstatusBar();
  }
  showstatusBar()
  {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#6495ed');
    this.statusBar.show();
  }
  view(name: string)
    {
      this.movid= name;
     this.navCtrl.push(ViewPage,
      {
        data: this.movid
      });
      console.log(this.movid);
      
      console.log(this.movid);
    }
    

   
   getMovies()
   {
     this.movieProvider.getMovie().subscribe( movie =>
      {
        this.movie = movie;
        this.size = Object.keys(this.movie.results).length;
        for(var i=0; i<this.size;i++)
        {
          this.movies=this.movie.results;
          this.show.push(
            {
              title:this.movie.results[i].title,
              imagelink:this.imageurl+this.movie.results[i].poster_path,
              movieid:this.movie.results[i].id,
              moviedesc:this.movie.results[i].overview
              
            });
            //this.moviedesc = this.movies[i].title;
        }
        console.log(this.size);
        console.log(this.show);
        console.log(this.movie);
        console.log(this.moviedesc);
        
      })
   }
   
    
  showmore(title:string)
  {
    this.titleshow = title;
    let alert = this.alertController.create
    (
      {
        title: 'Movie Details',
        message: this.titleshow,
        buttons:
        [
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      }
    )
    alert.present();
    console.log(this.titleshow);

  }
  download()
  {
    let dwnalert = this.alertController.create(
      {
        title:'Ops!',
        message:'Feature coming soon',
        buttons:
        [
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      }
    )
    dwnalert.present();
  }

}
