import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersComponent} from './players/players.component';
import {EncounterComponent} from './encounter/encounter.component';

const routes: Routes = [
  { path: '', redirectTo: '/encounters', pathMatch: 'full'},
  { path: 'players', component: PlayersComponent},
  { path: 'encounters', component: EncounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
