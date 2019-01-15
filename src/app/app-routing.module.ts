import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavInsertComponent } from './jav-insert/jav-insert.component';
import { MachineLearningHomeComponent } from './machine-learning/machine-learning-home/machine-learning-home.component';
import { DataScienceHomeComponent } from './data-science/data-science-home/data-science-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-science', component: DataScienceHomeComponent },
  { path: 'machine-learning', component: MachineLearningHomeComponent },
  { path: 'av-register', component: JavInsertComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
