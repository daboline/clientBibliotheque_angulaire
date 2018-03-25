import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BibliothequeModel} from '../model/model.bibliotheque';

@Injectable()
export class BibliothequesService {

  constructor(public http: Http) {
  }

  // liste des Bibliotheques
  listToutBiblio() {
    return this.http.get('http://localhost:8080/listesbiblio')
      .map(resp => resp.json());
  }


  // ajout Bibliotheque
  ajoutBiblio(bibio: BibliothequeModel) {
    return this.http.post('http://localhost:8080/Ajoutbiblio', bibio)
      .map(resp => resp.json());
  }

  // chercher une  Bibliotheque par son id
  chercherBiblioParId(id: number) {
    return this.http.get('http://localhost:8080/listesbiblio/' + id)
      .map(resp => resp.json());
  }

  // mise a jour Bibliotheque
  modifiercationBiblio(bibio: BibliothequeModel) {
    return this.http.put('http://localhost:8080/modification/' + bibio.id, bibio)
      .map(resp => resp.json());

  }

  //Suppression Bibliotheque
  suppression(id: number) {
    return this.http.delete('http://localhost:8080/supprimebiblio/' + id)
      .map(resp => resp.json());

  }

  // liste livre de la  Bibliotheque
  listesLivreBiblioService(id: number) {
    return this.http.get('http://localhost:8080/listeslivresbiblio/' + id)
      .map(resp => resp.json());
  }
}
