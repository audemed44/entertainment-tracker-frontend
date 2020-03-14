import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AnimeService {
  constructor(private http: HttpClient) {}
  topAnimeApiUrl = "https://api.jikan.moe/v3/top/anime";
  animeDetailApiUrl = "https://api.jikan.moe/v3/anime";
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //     "Access-Control-Allow-Headers": "*"
  //   })
  // };
  getTopAnime() {
    return this.http.get(this.topAnimeApiUrl);
  }
  getTopAnimeByPage(page: number) {
    console.log(this.topAnimeApiUrl + "/" + page.toString());
    return this.http.get(this.topAnimeApiUrl + "/" + page.toString());
  }

  getDetailById(mal_id: number) {
    console.log(this.animeDetailApiUrl + "/" + mal_id.toString());
    return this.http.get(this.animeDetailApiUrl + "/" + mal_id.toString());
  }
}
