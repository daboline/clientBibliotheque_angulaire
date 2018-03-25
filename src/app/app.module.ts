import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BibiothequesComponent} from './bibiotheques/bibiotheques.component';
import {LivresComponent} from './livres/livres.component';
import {HttpModule} from '@angular/http';
import {BibliothequesService} from './bibliotheques.service';
import {FormsModule} from '@angular/forms';
import {CreerBibliothequeComponent} from './creer-bibliotheque/creer-bibliotheque.component';
import {CreerBibliov2Component} from './creer-bibliov2/creer-bibliov2.component';
import {EditBibliothequeComponent} from './edit-bibliotheque/edit-bibliotheque.component';
import {ListesLivreBibliothequeComponent} from './listes-livre-bibliotheque/listes-livre-bibliotheque.component';
import {AjoutLivreBibliothequeComponent} from './ajout-livre-bibliotheque/ajout-livre-bibliotheque.component';
import {LivresService} from './livres.service';
import {EditLivreComponent} from './edit-livre/edit-livre.component';


@NgModule({
  declarations: [
    AppComponent,
    BibiothequesComponent,
    LivresComponent,
    CreerBibliothequeComponent,
    CreerBibliov2Component,
    EditBibliothequeComponent,
    ListesLivreBibliothequeComponent,
    AjoutLivreBibliothequeComponent,
    EditLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule, FormsModule

  ],
  providers: [BibliothequesService, LivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
