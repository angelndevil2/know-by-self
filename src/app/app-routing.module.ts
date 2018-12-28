import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFirestoreComponent } from './angular-firestore/angular-firestore.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'angular-firestore', component: AngularFirestoreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
