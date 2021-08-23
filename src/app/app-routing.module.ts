import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkrateComponent } from './_projects/workrate/workrate.component';
import { StayleanComponent } from './_projects/staylean/staylean.component';
import { NetalyzeComponent } from './_projects/netalyze/netalyze.component';
import { PlantRunnerComponent } from './_projects/plant-runner/plant-runner.component';
import { PortfolioComponent } from './_projects/portfolio/portfolio.component';
import { SzlakownikComponent } from './_projects/szlakownik/szlakownik.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/workrate', component: WorkrateComponent },
  { path: 'projects/portfolio', component: PortfolioComponent },
  { path: 'projects/szlakownik', component: SzlakownikComponent },
  { path: 'projects/plant-runner', component: PlantRunnerComponent },
  { path: 'projects/staylean', component: StayleanComponent},
  { path: 'projects/netalyze-website', component: NetalyzeComponent},
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
