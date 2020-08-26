import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if(searchTerm !== '') {
      this.giphyService.searchGifs(searchTerm);
        

    }

  }

}
