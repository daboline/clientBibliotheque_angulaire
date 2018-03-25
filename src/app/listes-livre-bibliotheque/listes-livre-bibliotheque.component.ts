import {Component, OnInit} from '@angular/core';
import {BibliothequesService} from '../bibliotheques.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listes-livre-bibliotheque',
  templateUrl: './listes-livre-bibliotheque.component.html',
  styleUrls: ['./listes-livre-bibliotheque.component.css']
})
export class ListesLivreBibliothequeComponent implements OnInit {
  listesLivreBibliorecu: any[];
  // bibliothequeListesLivre:BibliothequeModel=new BibliothequeModel();
  idBiblio: number;

  // activatedRoute donne la route activer, c'est pour accerder au param de la requete modifBiblio/id'
  constructor(public biblioService: BibliothequesService, activatedRoute: ActivatedRoute, public router: Router) {

    this.idBiblio = activatedRoute.snapshot.params['id'];
    console.log('parametre id recuperer');
    console.log(this.idBiblio);
    console.log('parametre id recuperer');

  }

  ngOnInit() {
    this.listeLivreBiblio();
  }


  //liste livre biblio
  listeLivreBiblio() {
    this.biblioService.listesLivreBiblioService(this.idBiblio)
      .subscribe(data => {
        console.log(data);
        this.listesLivreBibliorecu = data;
        console.log('-----------------LIVRE DE LA BIBLIO-------------------');

        console.log(this.listesLivreBibliorecu);
        console.log('------------------LIVRE DE LA BIBLIO-------------------');

      }, err3 => {
        console.log(err3);
      });

  }

  //modifier un livre
  modfierLivre(idLivre: number) {
    this.router.navigate(['/modifierlivre', idLivre]);


  }

  //supprimer un livre
  supprimerLivre() {

  }
}

//liste livre biblio

/*listeLivreBiblio(){
  this.biblioService.listesLivreBiblioService(this.bibliothequeListesLivre.id)
    .subscribe(data=>{
      console.log(data);
      this.listesLivreBibliorecu=data;

    },err=>{
      console.log(err)
    } )

}*/

