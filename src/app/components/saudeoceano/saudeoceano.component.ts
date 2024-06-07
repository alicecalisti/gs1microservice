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
  // termoPesquisa: string = '';
  oceanos: Oceano[]=[];
  oceanosFiltrados: Oceano[] = [];
  regioesDisponiveis: string[] = [];
  especiesDisponiveis: string[] = [];
  filtroRegiao: string = '';
  filtroEspecie: string = '';
  constructor(private OceanoService: OceanoService){

  };

  ngOnInit(): void {
    this.carregarOceanos();
  }

  carregarOceanos(): void {
    this.OceanoService.listar().subscribe(oceanos => {
      this.oceanos = oceanos;
      this.oceanosFiltrados = oceanos;
      this.regioesDisponiveis = Array.from(new Set(oceanos.map(oceano => oceano.regiao)));
      this.especiesDisponiveis = Array.from(new Set(oceanos.flatMap(oceano => oceano.especies.map(especie => especie.nome))));
    });
  }

  filtrar(): void {
    this.oceanosFiltrados = this.oceanos.filter(oceano =>
      (this.filtroRegiao === '' || oceano.regiao === this.filtroRegiao) &&
      (this.filtroEspecie === '' || oceano.especies.some(especie => especie.nome === this.filtroEspecie))
    );
  }


  // listar():void{
  //   this.OceanoService.listar().subscribe((listOceano)=>(this.oceanos=listOceano));
  // }


  // ngOnInit():void{
  //   this.listar();
  // }

  // filtrarItens() {
  //   return this.oceanos.filter(item => item.regiao);
  // }


}
