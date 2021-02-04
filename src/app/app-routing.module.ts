import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AstroviewComponent } from './_projects/astroview/astroview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'astroview', component: AstroviewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
