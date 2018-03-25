import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LivresService} from '../livres.service';
import {LivreModel} from '../../model/model.livre';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {
  idLivreAmodifier: number;
  livreEdit: LivreModel = new LivreModel();

  // activatedRoute donne la route activer, c'est pour accerder au param de la requete modifBiblio/id'
  constructor(activatedRoute: ActivatedRoute, public livreService: LivresService, public  router: Router) {
    console.log('_____________ID LIVRE A MODIFIER RECUPERER_______________');
    console.log(activatedRoute.snapshot.params['id']);
    console.log('_____________ID LIVRE A MODIFIER A RECUPERER_______________');
    this.idLivreAmodifier = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {

    this.livreService.chercherLivreParId(this.idLivreAmodifier)
      .subscribe(data => {
        this.livreEdit = data;
      }, error2 => {
        console.log(error2);
      });
  }

  modificationLivre() {
    this.livreService.modifierLivreParId(this.livreEdit)
      .subscribe(data => {
        alert('mise à jour bien effectuée');
        this.router.navigate(['/listesbiblio']);
      }, error2 => {
        console.log('Erreur de mise a jour livre');
        console.log(error2);
      });
  }
}
