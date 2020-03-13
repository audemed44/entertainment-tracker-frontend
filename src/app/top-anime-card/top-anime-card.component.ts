import { Component, OnInit } from "@angular/core";
import { TopAnimeModel } from "../top-anime/top-anime-model";
import { TopAnimeService } from "../top-anime.service";

@Component({
  selector: "app-top-anime-card",
  templateUrl: "./top-anime-card.component.html",
  styleUrls: ["./top-anime-card.component.css"]
})
export class TopAnimeCardComponent implements OnInit {
  constructor(private topAnimeService: TopAnimeService) {}
  topAnime: TopAnimeModel[];
  getTopAnime() {
    this.topAnimeService.getTopAnime().subscribe(data => {
      this.topAnime = data["top"];
    });
  }
  ngOnInit(): void {
    this.getTopAnime();
  }
}
