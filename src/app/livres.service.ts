import {Injectable} from '@angular/core';
import {BibliothequeModel} from '../model/model.bibliotheque';
import {LivreModel} from '../model/model.livre';
import {Http} from '@angular/http';

@Injectable()
export class LivresService {

  constructor(public http: Http) {
  }

  // ajout Bibliotheque
  ajoutLivreBiblioService(idBibio: number, livres: LivreModel) {
    return this.http.post('http://localhost:8080/ajoutlivrepourbiblio/' + idBibio, livres)
      .map(resp => resp.json());
  }

  // chercher une  livre par son id
  chercherLivreParId(id: number) {
    return this.http.get('http://localhost:8080/listeslivres/' + id)
      .map(resp => resp.json());
  }

  // mise a jour livre
  modifierLivreParId(livre: LivreModel) {
    console.log(livre.id);
    return this.http.put('http://localhost:8080/modifierlivre/' + livre.id, livre)
      .map(resp => resp.json());
  }
}
