import { BbddService } from './../../services/bbdd.service';
import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/Articulo';
import { ArticuloFamilia } from '../../interfaces/ArticuloFamilia';

@Component({
  selector: 'app-slider-articulos',
  templateUrl: './slider-articulos.component.html',
  styleUrls: ['./slider-articulos.component.css']
})
export class SliderArticulosComponent  {


  displayModal: boolean = false;
  articuloAMostrar!:Articulo;
  responsiveOptions: any[];

  showModalDialog() {
    this.displayModal = true;
}

  constructor(private bbdd: BbddService) {
 // opciones primeng responsive
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

   }
  @Input() listaArticulos:ArticuloFamilia[] = [];


  muestraArticulo(articulo: ArticuloFamilia) {
    // el articulo a hacer popUp
    console.log(articulo);
    this.bbdd.getArticuloPorId(articulo.id)
      .subscribe(articulo => {
        this.articuloAMostrar = articulo;
        this.showModalDialog();
      })
  }

  cerrarModal(){
    this.displayModal = false;
  }

}
