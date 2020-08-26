import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})

export class GiftsComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription: Subscription;

  constructor(private giphyService:GiphyService) { }

  ngOnInit(): void {
    this.giphyService.getGiphy()    
    this.subscription = this.giphyService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
