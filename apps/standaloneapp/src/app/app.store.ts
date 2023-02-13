import { Injectable } from '@angular/core';
import { Game } from '@bg-hoard1/util-interface';
import { ComponentStore } from '@ngrx/component-store'

@Injectable()
export class AppStore extends ComponentStore<any> {
    constructor() {
        super([]);
    }
    readonly imgData$ = this.select(({imgData}) => imgData);
    readonly loadImgdata = this.updater((state, imgData: Game[]) => ({ ...state, imgData}));

    readonly img$ = this.select(({img}) => img);
    readonly loadImg = this.updater((state, img: Game[]) => ({ ...state, img}));

}