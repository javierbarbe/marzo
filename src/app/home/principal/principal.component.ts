import { Component, OnInit, Renderer2 } from '@angular/core';
import { BbddService } from '../../services/bbdd.service';
import { Familia } from '../../interfaces/Familia';
import { ArticuloFamilia } from '../../interfaces/ArticuloFamilia';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  familias!: Familia[];
  idElegido:number = 0;
  listaArticulos!: ArticuloFamilia[];
  constructor(private bbdd: BbddService, private render: Renderer2) {

    this.bbdd.getFamiliasArticulos()
      .subscribe(res => {
        this.familias = res;
      });
    this.bbdd.getListaArticulosPorFamilia(1).subscribe(res => {
      this.listaArticulos = res;
    });

  }

  ngOnInit(): void {
  }

  pestannaElegida(id:number): boolean {
    let resultado:boolean = false;
    (this.idElegido == id) ? resultado = true :  resultado = false;
    return resultado;
  }

  cambiaFamiliaCarrousel( familia: Familia) {
    console.log(familia);
    const { id } = familia;
    this.idElegido = id;
    this.bbdd.getListaArticulosPorFamilia(id).subscribe(nuevalista => {
      this.listaArticulos = nuevalista;
    })
  }

}
