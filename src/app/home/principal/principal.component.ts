import { Component, OnInit } from '@angular/core';
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
 listaArticulos!: ArticuloFamilia[];
  constructor(private bbdd : BbddService) {
  
    this.bbdd.getFamiliasArticulos()
    .subscribe(res=> {
      this.familias = res;
    });
    this.bbdd.getListaArticulosPorFamilia(1).subscribe(res=> {
      this.listaArticulos = res;
    });

   }

  ngOnInit(): void {
  }

  cargaItemsFamilia(event:any){
    const nuevoId = event.target.value;
    console.log("ha cambiado el select",nuevoId);
    this.bbdd.getListaArticulosPorFamilia(nuevoId).subscribe(nuevalista=> {
      this.listaArticulos = nuevalista;
    })
  }
  muestraArticulo(target: any)
  {
 const idArticulo = target.value;
 if(!idArticulo){
   return;
 }
 console.log(idArticulo);
 this.bbdd.getArticuloPorId(idArticulo).subscribe(articulo=> {
   console.log(articulo);
 })
  }
}
