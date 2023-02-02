import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard1/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard1/util-interface';

@Component({
  selector: 'bg-hoard1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log("component constructed") 
  }
  title = 'store';
  //games = getAllGames();
  formatRating = formatRating;
  games = this.http.get<Game[]>('/api/games');
}
