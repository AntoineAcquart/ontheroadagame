import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LiveComponent } from "./live/live.component";
import { GamesComponent } from "./games/games.component";
import { FactionsComponent } from "./factions/factions.component";
import { ProfileComponent } from "./profile/profile.component";
import { VideosComponent } from "./videos/videos.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveComponent,
    GamesComponent,
    FactionsComponent,
    ProfileComponent,
    VideosComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
