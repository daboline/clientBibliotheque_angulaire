import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BibiothequesComponent} from './bibiotheques/bibiotheques.component';
import {LivresComponent} from './livres/livres.component';
import {CreerBibliothequeComponent} from './creer-bibliotheque/creer-bibliotheque.component';
import {CreerBibliov2Component} from './creer-bibliov2/creer-bibliov2.component';
import {EditBibliothequeComponent} from './edit-bibliotheque/edit-bibliotheque.component';
import {ListesLivreBibliothequeComponent} from './listes-livre-bibliotheque/listes-livre-bibliotheque.component';
import {AjoutLivreBibliothequeComponent} from './ajout-livre-bibliotheque/ajout-livre-bibliotheque.component';
import {EditLivreComponent} from './edit-livre/edit-livre.component';

const routes: Routes = [
  {path: 'listesbiblio', component: BibiothequesComponent},
  {path: 'listeslivre', component: LivresComponent},
  {path: 'ajoutbiblio', component: CreerBibliothequeComponent}, //utilisation 1eme maniere de creer
  // {path:'ajoutbiblio',component:CreerBibliov2Component}, //utilisation 2eme maniere de creer
  {path: 'modifierbiblio/:id', component: EditBibliothequeComponent}, //utilisation 1eme maniere de creer
  {path: 'listeslivresbibliotheque/:id', component: ListesLivreBibliothequeComponent},
  {path: 'ajoutlivresbibliotheque/:bibio', component: AjoutLivreBibliothequeComponent},
  {path: 'modifierlivre/:id', component: EditLivreComponent},
  {path: '', redirectTo: '/listesbiblio', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
