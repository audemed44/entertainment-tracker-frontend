import { Component, OnInit } from "@angular/core";
import { TopAnimeService } from "../top-anime.service";
import { TopAnimeModel } from "./top-anime-model";
@Component({
  selector: "app-top-anime",
  templateUrl: "./top-anime.component.html",
  styleUrls: ["./top-anime.component.css"]
})
export class TopAnimeComponent implements OnInit {
  constructor(private topAnimeService: TopAnimeService) {}
  topAnime: TopAnimeModel[];
  getTopAnime() {
    this.topAnimeService.getTopAnime().subscribe(data => {
      this.topAnime = data["top"];
      console.log(this.topAnime);
    });
  }

  ngOnInit(): void {
    this.getTopAnime();
  }
}
