import { Component, OnInit } from "@angular/core";
import { TopAnimeModel } from "../top-anime/top-anime-model";
import { AnimeService } from "../anime.service";

@Component({
  selector: "app-top-anime-card",
  templateUrl: "./top-anime-card.component.html",
  styleUrls: ["./top-anime-card.component.css"]
})
export class TopAnimeCardComponent implements OnInit {
  constructor(private topAnimeService: AnimeService) {}
  topAnime: TopAnimeModel[];
  tempTopAnime: TopAnimeModel[];
  currentPage: number = 1;
  loadingFlag: boolean = false;
  initLoaded: boolean = false;
  getTopAnime() {
    this.loadingFlag = true;
    this.initLoaded = false;
    this.topAnimeService.getTopAnime().subscribe(data => {
      this.topAnime = data["top"];
      this.loadingFlag = false;
      this.initLoaded = true;
    });
  }
  goNextPage() {
    this.loadingFlag = true;
    this.currentPage = this.currentPage + 1;
    this.topAnimeService.getTopAnimeByPage(this.currentPage).subscribe(data => {
      this.tempTopAnime = data["top"];
      this.topAnime = this.topAnime.concat(this.tempTopAnime);
      console.log(this.topAnime.length);
      this.tempTopAnime = [];
      this.loadingFlag = false;
    });
  }

  ngOnInit(): void {
    this.getTopAnime();
  }
}
