import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionExperienceComponent } from './gestion-experience/gestion-experience.component';
import { CreateComponent } from './gestion-experience/create/create.component';
import { UpdateComponent } from './gestion-experience/update/update.component';
import { GestionProjetComponent } from './gestion-projet/gestion-projet.component';
import { CreateProjetComponent } from './gestion-projet/create/create.component';

const routes: Routes = [
    {
      path: '',
      component: AccueilComponent,
    },
    // experience
    {
      path: 'backend008/experience',
      component: GestionExperienceComponent,
    },
    {
      path: 'backend008/experienceCreate',
      component: CreateComponent,
    },
    {
      path: 'backend008/experienceUpdate/:id',
      component: UpdateComponent,
    },
    // projet
    {
      path: 'backend008/projet',
      component: GestionProjetComponent,
    },
    {
      path: 'backend008/projetCreate',
      component: CreateProjetComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
