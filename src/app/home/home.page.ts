import { ArtigoService } from './../artigo/artigo.service';
import { Component } from '@angular/core';
import { Artigo } from '../model/artigo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artigos: Artigo[]=[];

  constructor(private serviceArtigo: ArtigoService) {
    this.artigos = this.serviceArtigo.getAll();
  }

  aluno: string = 'Tathiana Machado';
  imgUrl: string = 'https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=a010291124bf';

  // ionViewDidEnter(){}

  
  
}
