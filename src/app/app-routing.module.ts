import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, Router } from "@angular/router";
import { TopAnimeComponent } from "./anime/top-anime/top-anime.component";
import { TopAnimeCardComponent } from "./anime/top-anime-card/top-anime-card.component";
import { AnimeDetailComponent } from "./anime/anime-detail/anime-detail.component";

const routes: Routes = [
  { path: "top-anime", component: TopAnimeCardComponent },
  { path: "top-anime-table", component: TopAnimeComponent },
  { path: "", redirectTo: "/top-anime", pathMatch: "full" },
  { path: "anime/:id", component: AnimeDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
