import {Component, OnInit} from '@angular/core';
import {BibliothequesService} from '../bibliotheques.service';

@Component({
  selector: 'app-creer-bibliov2',
  templateUrl: './creer-bibliov2.component.html',
  styleUrls: ['./creer-bibliov2.component.css']
})
export class CreerBibliov2Component implements OnInit {

  constructor(public bibioservice: BibliothequesService) {
  }

  ngOnInit() {
  }

  ajoutBiblioV2(dataForm) {
    this.bibioservice.ajoutBiblio(dataForm)
      .subscribe(data => {
        console.log('Ajout reussi', data);
      }, err => {
        console.log(JSON.parse(err.body).message);
      });

  }


}
