import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { formatRating } from '@bg-hoard1/store/util-formatters';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Game } from '@bg-hoard1/util-interface';
import { StoreUiSharedModule } from '@bg-hoard1/store/ui-shared';
import { AppStore } from './app.store';
import { AppService } from './app.service';


// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import { getAllGames } from '../../../store/src/fake-api';


@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule, MatCardModule, StoreUiSharedModule],
  selector: 'bg-hoard1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppStore]
})

export class AppComponent implements OnInit {
  title = 'standaloneapp';
  games: Game[] = [];
  formatRating = formatRating;
  
  constructor(private readonly _appStore: AppStore, private readonly _appService: AppService,) {
    console.log("component constructed");
    this._appService.getImgData().subscribe({
      next: (imgData) => {
        this._appStore.loadImgdata(imgData);
      }
    })
  }
  
  ngOnInit(): void {
    this._appStore.imgData$.subscribe(res => this.games = res);
  }
}


