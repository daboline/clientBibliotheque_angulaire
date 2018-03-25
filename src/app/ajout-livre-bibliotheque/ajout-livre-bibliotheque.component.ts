import {Component, OnInit} from '@angular/core';
import {BibliothequesService} from '../bibliotheques.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LivreModel} from '../../model/model.livre';
import {LivresService} from '../livres.service';
import {BibliothequeModel} from '../../model/model.bibliotheque';

@Component({
  selector: 'app-ajout-livre-bibliotheque',
  templateUrl: './ajout-livre-bibliotheque.component.html',
  styleUrls: ['./ajout-livre-bibliotheque.component.css']
})
export class AjoutLivreBibliothequeComponent implements OnInit {
  biblioCiblePourLivre: number;

  constructor(activateRoutes: ActivatedRoute, public livreService: LivresService, public router: Router) {
    this.biblioCiblePourLivre = activateRoutes.snapshot.params['bibio'];
    console.log('le lire sera ajouter dans la biblio avec id!' + this.biblioCiblePourLivre);


  }

  ngOnInit() {
  }

  ajoutLivreBiblio(donneeFormLivre) {
    this.livreService.ajoutLivreBiblioService(this.biblioCiblePourLivre, donneeFormLivre)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['']);

      }, error2 => {
        console.log('Erreur ajout livre a la bibliotheque');
        console.log(error2);
      });


  }
}
