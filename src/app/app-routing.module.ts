import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavInsertComponent } from './jav-insert/jav-insert.component';
import { DataScienceHomeComponent } from './data-science/data-science-home/data-science-home.component';
import { MachineLearningHomeComponent } from './machine-learning/machine-learning-home/machine-learning-home.component';
// tslint:disable-next-line:max-line-length
import { GenerativeApproachToClassificationComponent } from './machine-learning/generative-approach-to-classification/generative-approach-to-classification.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-science', component: DataScienceHomeComponent },
  { path: 'data-science/statistics', component: DataScienceHomeComponent },
  { path: 'machine-learning', component: MachineLearningHomeComponent },
  { path: 'machine-learning/generative-approach-to-classification', component: GenerativeApproachToClassificationComponent },
  { path: 'av-register', component: JavInsertComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
