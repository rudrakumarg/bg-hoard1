import {  ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { formatRating } from '@bg-hoard1/store/util-formatters';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AppStore} from '../../../../../apps/standaloneapp/src/app/app.store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppService } from '../../../../../apps/standaloneapp/src/app/app.service';

@Component({
  selector: 'bg-hoard1-feature-a',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAComponent {
  
  constructor(private route: ActivatedRoute, private readonly _appStore: AppStore, private readonly _appService: AppService) {
    this.route.params.subscribe(params => {
      this._appService.getImg(params['id']).subscribe({
        next: (img) => {
          this._appStore.loadImg(img);
        }
      });   
    });
  }

  game$ = this._appStore.img$

  formatRating = formatRating;

}

