import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
// import "rxjs/add/operator/map"
import {BibliothequesService} from '../bibliotheques.service';
import {Router} from '@angular/router';
import {BibliothequeModel} from '../../model/model.bibliotheque';
import {queryRefresh} from '@angular/core/src/render3/query';

@Component({
  selector: 'app-bibiotheques',
  templateUrl: './bibiotheques.component.html',
  styleUrls: ['./bibiotheques.component.css']
})
export class BibiothequesComponent implements OnInit {
  listeBibliorecu: any[];

  // bibiotheque={nom:"BibliothequeESMT", ecole:"ESMT"};

  constructor(private http: Http, public  biblioService: BibliothequesService, public router: Router) {
  }

  ngOnInit() {

    this.biblioService.listToutBiblio()
      .subscribe(data => {
          this.listeBibliorecu = data;
          console.log(data);
        }
        , err => {
          console.log(err);
        });

    /*
    deplacer dans service
    this.http.get("http://localhost:8080/listesbiblio")
      .map(resp => resp.json() )
      .subscribe(data => {
        this.listeBibliorecu = data;
        console.log(data)

      },err=>{
        console.log(err);
      })
      */


  }

  // modification biblio
  modifierBiblio(id: number) {
    this.router.navigate(['/modifierbiblio', id]);

  }

  supprimerBiblio(biblio: BibliothequeModel) {
    let confimation = window.confirm('voulez-vous vraiment supprimer la bibliotheque  ' + biblio.nom);
    if (confimation == true) {

      this.biblioService.suppression(biblio.id)
        .subscribe(data => {
          console.log('suppression bibliotheque avec id est-il vrai??:' + data);
          window.location.reload();

        }, err => {
          console.log(err);
        });

    }
  }

  // liste livre biblio
  listeLivreBiblio(id: number) {
    this.router.navigate(['/listeslivresbibliotheque', id]);
  }

  // ajouter livre a la biblio
  ajoutLivreBiblio(idBiblioPourAddLivre: number) {
    console.log(idBiblioPourAddLivre);
    this.router.navigate(['/ajoutlivresbibliotheque', +idBiblioPourAddLivre]);

  }
}
