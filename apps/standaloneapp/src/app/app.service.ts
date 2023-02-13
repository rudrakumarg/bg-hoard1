import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Game } from "@bg-hoard1/util-interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AppService {
 constructor(private readonly _httpClient: HttpClient){}

 getImgData(): Observable<Game[]> {
    return this._httpClient
    .get<Game[]>('/api/games');
 }

 getImg(img: string): Observable<Game[]> {
    return this._httpClient
    .get<Game[]>(`/api/games/${img}`);
 }

}