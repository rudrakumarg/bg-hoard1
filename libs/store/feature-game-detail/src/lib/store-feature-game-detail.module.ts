import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storeFeatureGameDetailRoutes } from './lib.routes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule.forChild(storeFeatureGameDetailRoutes)],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
