import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsCardsComponent } from './projects-cards/projects-cards.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import {NgsRevealModule} from 'ngx-scrollreveal';
import { PortfolioComponent } from './_projects/portfolio/portfolio.component';
import { SzlakownikComponent } from './_projects/szlakownik/szlakownik.component';
import { PlantRunnerComponent } from './_projects/plant-runner/plant-runner.component';
import { LawFirmWebsiteComponent } from './_projects/law-firm-website/law-firm-website.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectCardComponent,
    ProjectsCardsComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    SzlakownikComponent,
    PlantRunnerComponent,
    LawFirmWebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
