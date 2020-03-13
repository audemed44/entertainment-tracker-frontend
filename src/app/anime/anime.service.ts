import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AnimeService {
  constructor(private http: HttpClient) {}
  apiUrl = "https://api.jikan.moe/v3/top/anime";
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //     "Access-Control-Allow-Headers": "*"
  //   })
  // };
  getTopAnime() {
    return this.http.get(this.apiUrl);
  }
  getTopAnimeByPage(page: number) {
    console.log(this.apiUrl + "/" + page.toString());
    return this.http.get(this.apiUrl + "/" + page.toString());
  }
}
