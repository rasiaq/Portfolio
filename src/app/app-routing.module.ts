import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AstroviewComponent } from './_projects/astroview/astroview.component';
import { LawFirmWebsiteComponent } from './_projects/law-firm-website/law-firm-website.component';
import { PlantRunnerComponent } from './_projects/plant-runner/plant-runner.component';
import { PortfolioComponent } from './_projects/portfolio/portfolio.component';
import { SzlakownikComponent } from './_projects/szlakownik/szlakownik.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/astroview', component: AstroviewComponent },
  { path: 'projects/portfolio', component: PortfolioComponent },
  { path: 'projects/szlakownik', component: SzlakownikComponent },
  { path: 'projects/plant-runner', component: PlantRunnerComponent },
  { path: 'projects/law-firm-website', component: LawFirmWebsiteComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
