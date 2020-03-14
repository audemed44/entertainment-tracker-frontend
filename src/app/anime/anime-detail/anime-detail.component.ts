import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnimeService } from "../anime.service";
import { Anime } from "./anime-model";
@Component({
  selector: "app-anime-detail",
  templateUrl: "./anime-detail.component.html",
  styleUrls: ["./anime-detail.component.css"]
})
export class AnimeDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}
  loading: boolean = true;
  animeDetails = new Anime();
  getAnimeDetails() {
    console.log(+this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.animeService
      .getDetailById(+this.route.snapshot.paramMap.get("id"))
      .subscribe(data => {
        console.log(data["title"]);
        this.animeDetails.mal_id = data["mal_id"];
        console.log(this.animeDetails.mal_id);
        this.animeDetails.url = data["url"];
        this.animeDetails.aired = data["aired"]["string"];
        this.animeDetails.airing = data["airing"];
        this.animeDetails.background = data["background"];
        this.animeDetails.broadcast = data["broadcast"];
        this.animeDetails.duration = data["duration"];
        this.animeDetails.ending_themes = data["ending_themes"];
        this.animeDetails.episodes = data["episodes"];
        this.animeDetails.favorites = data["favorites"];
        this.animeDetails.genres = data["genres"];
        this.animeDetails.image_url = data["image_url"];
        this.animeDetails.licensors = data["licensors"];
        this.animeDetails.opening_themes = data["opening_themes"];
        this.animeDetails.popularity = data["popularity"];
        this.animeDetails.premiered = data["premiered"];
        this.animeDetails.producers = data["producers"];
        this.animeDetails.rank = data["rank"];
        this.animeDetails.rating = data["rating"];
        this.animeDetails.related = data["related"];
        this.animeDetails.score = data["score"];
        this.animeDetails.scored_by = data["scored_by"];
        this.animeDetails.source = data["source"];
        this.animeDetails.status = data["status"];
        this.animeDetails.studios = data["studios"];
        this.animeDetails.synopsis = data["synopsis"];
        this.animeDetails.title = data["title"];
        this.animeDetails.title_english = data["title_english"];
        this.animeDetails.title_japanese = data["title_japanese"];
        this.animeDetails.title_synonyms = data["title_synonyms"];
        this.animeDetails.trailer_url = data["trailer_url"];
        this.animeDetails.type = data["type"];
        console.log(this.animeDetails);
        console.log(this.animeDetails.related);
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.getAnimeDetails();
  }
}
