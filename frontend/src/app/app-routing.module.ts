import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LiveComponent } from "./live/live.component";
import { GamesComponent } from "./games/games.component";
import { FactionsComponent } from "./factions/factions.component";
import { ProfileComponent } from "./profile/profile.component";
import { VideosComponent } from "./videos/videos.component";

const routes: Routes = [
  { path: "accueil", component: HomeComponent },
  { path: "live", component: LiveComponent },
  { path: "jeux", component: GamesComponent },
  { path: "factions", component: FactionsComponent },
  { path: "profil", component: ProfileComponent },
  { path: "videos", component: VideosComponent },

  { path: "**", redirectTo: "accueil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
