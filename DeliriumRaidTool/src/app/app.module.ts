import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { EncounterComponent } from './encounter/encounter.component';
import { PlayersComponent } from './players/players.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ControlpanelComponent,
    EncounterComponent,
    PlayersComponent,
    TopnavComponent,
    NewsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
