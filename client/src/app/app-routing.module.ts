import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import {FormComponent} from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent,
    pathMatch: 'full'
  },
  {
    path: 'details',
    redirectTo : 'form',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}