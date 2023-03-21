import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
    {
      path: '',
      component: AccueilComponent,
      children: [
          // {path: '', loadChildren: () => import('app/accueil/accueil.component').then(m => m.AuthConfirmationRequiredModule)},
          // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
      ]
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
