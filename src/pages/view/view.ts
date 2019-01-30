import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider } from '../../providers/movie/movie'; 
import {HomePage} from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  movieid:any;
  movievideo:any;
  moviekey:any;
  youtube = 'http://www.youtube.com/embed/';
  videolink:any;
  //staticlink = 'http://www.youtube.com/embed/WDkg3h8PCVU';

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public sanitizer: DomSanitizer,private movieProvider: MovieProvider, public navParams: NavParams) {
    this.movieid = navParams.get('data');
    console.log(this.movieid);
    this.getVideos();
    console.log(this.sanitizer);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
  getVideos()
  {
    if(this.movieid==undefined)
    {
      this.navCtrl.push(HomePage);
    }
    else{
    this.movieProvider.getVideo(this.movieid).subscribe(
      movievideo=>{
        this.movievideo = movievideo;
        console.log(this.movievideo);
        this.moviekey = this.movievideo.results[0].key
        this.videolink = this.youtube+this.moviekey;
        console.log(this.videolink);
      });
  }
}

}
