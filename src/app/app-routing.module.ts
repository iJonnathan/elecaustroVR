import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoTextComponent } from './components/info-text/info-text.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  // { path: '',  component: InfoTextComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
