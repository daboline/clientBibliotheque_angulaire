import {Component, OnInit} from '@angular/core';
import {BibliothequeModel} from '../../model/model.bibliotheque';
import {ActivatedRoute, Router} from '@angular/router';
import {BibliothequesService} from '../bibliotheques.service';

@Component({
  selector: 'app-edit-bibliotheque',
  templateUrl: './edit-bibliotheque.component.html',
  styleUrls: ['./edit-bibliotheque.component.css']
})

export class EditBibliothequeComponent implements OnInit {
  biblioEdit: BibliothequeModel = new BibliothequeModel();
  mode: number = 1;
  idBiblio: number;

  // activatedRoute donne la route activer, c'est pour accerder au param de la requete modifBiblio/id'
  constructor(activatedRoute: ActivatedRoute, public bibliothequeService: BibliothequesService, public  router: Router) {
    console.log('_____________ID RECUPERER_______________');
    console.log(activatedRoute.snapshot.params['id']);
    console.log('_____________ID RECUPERER_______________');

    this.idBiblio = activatedRoute.snapshot.params['id'];

  }


  ngOnInit() {
    this.bibliothequeService.chercherBiblioParId(this.idBiblio)
      .subscribe(data => {
        this.biblioEdit = data;
      }, error2 => {
        console.log(error2);
      });
  }

  UpdateBiblio() {
    this.bibliothequeService.modifiercationBiblio(this.biblioEdit)
      .subscribe(data => {
          console.log(data);
          alert('mise à jour bien effectuée');
          //this.router.navigate(['/listesbiblio']);
        }, error => {
          console.log(error);
          console.log('Problème de mise à jour' + error);
        }
      );

  }
}
