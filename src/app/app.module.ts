import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "./app-material/app-material.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { TopAnimeComponent } from "./anime/top-anime/top-anime.component";
import { HttpClientModule } from "@angular/common/http";
import { TopAnimeCardComponent } from './anime/top-anime-card/top-anime-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TopAnimeComponent, TopAnimeCardComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
