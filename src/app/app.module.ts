import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { BuildersSectionComponent } from './builders-section/builders-section.component';
import { DownloadingSectionComponent } from './downloading-section/downloading-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    CardSectionComponent,
    ProjectSectionComponent,
    BuildersSectionComponent,
    DownloadingSectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
