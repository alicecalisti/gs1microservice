import { OceanoService } from './../../services/oceano.service';
import { Component, OnInit } from '@angular/core';
import { Oceano } from '../../interfaces/Oceano';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-saudeoceano',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saudeoceano.component.html',
  styleUrl: './saudeoceano.component.css'
})
export class SaudeoceanoComponent implements OnInit {
  termoPesquisa: string = '';
  oceanos: Oceano[]=[];
  constructor(private OceanoService: OceanoService){

  };
  listar():void{
    this.OceanoService.listar().subscribe((listOceano)=>(this.oceanos=listOceano));
  }


  ngOnInit():void{
    this.listar();
  }

  filtrarItens() {
    return this.oceanos.filter(item => item.regiao);
  }


}
