import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ScoresComponent } from './scores/scores.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'prices', component: ScoresComponent },
  { path: 'home', component: ScoresComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'price', component: PriceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
