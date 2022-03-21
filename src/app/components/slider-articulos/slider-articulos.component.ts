import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/Articulo';
import { ArticuloFamilia } from '../../interfaces/ArticuloFamilia';

@Component({
  selector: 'app-slider-articulos',
  templateUrl: './slider-articulos.component.html',
  styleUrls: ['./slider-articulos.component.css']
})
export class SliderArticulosComponent implements OnInit {


  displayModal: boolean = false;
  showModalDialog() {
    this.displayModal = true;
}

  // responsiveOptions: any[];
  constructor() {

  //   this.responsiveOptions = [
  //     // {
  //     //     breakpoint: '1024px',
  //     //     numVisible: 3,
  //     //     numScroll: 3
  //     // },
  //     // {
  //     //     breakpoint: '768px',
  //     //     numVisible: 2,
  //     //     numScroll: 1
  //     // },
  //     // {
  //     //     breakpoint: '560px',
  //     //     numVisible: 1,
  //     //     numScroll: 1
  //     // }
  // ];

   }
  @Input() listaArticulos:ArticuloFamilia[] = [];
  // articuloPrincipal!:ArticuloFamilia;
  ngOnInit(): void {
    // if(!this.listaArticulos) return;
    // this.articuloPrincipal = this.listaArticulos[0];
  }

  muestraArticulo(articulo: Articulo) {
    // el articulo a hacer popUp
    console.log(articulo);
  }

}
