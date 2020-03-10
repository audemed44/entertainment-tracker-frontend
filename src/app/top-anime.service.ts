import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TopAnimeService {
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
}
