import {Component, OnInit} from '@angular/core';
import {BibliothequeModel} from '../../model/model.bibliotheque';
import {BibliothequesService} from '../bibliotheques.service';
import {BibiothequesComponent} from '../bibiotheques/bibiotheques.component';

import {Router} from '@angular/router';

@Component({
  selector: 'app-creer-bibliotheque',
  templateUrl: './creer-bibliotheque.component.html',
  styleUrls: ['./creer-bibliotheque.component.css']
})
export class CreerBibliothequeComponent implements OnInit {
  // declaration d'un objet de type biblio
  bibliotheque: BibliothequeModel = new BibliothequeModel();
// declaration mode pour validation des champs de la biblio
  mode: number = 1;

// injection du service au niveau du constructeur
  constructor(public serviceBiblio: BibliothequesService, public router: Router) {
  }

  ngOnInit() {
  }

  SaveBiblio() {
    this.serviceBiblio.ajoutBiblio(this.bibliotheque)
      .subscribe(data => {
          this.bibliotheque = data;
          this.mode = 2;
          //this.router.navigate(['']);
          //console.log(data)
        },
        err => {
          console.log(err);
        }
      );

  }

  listDesBiblio() {
    this.router.navigate(['']);
  }
}
