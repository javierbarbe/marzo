import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[seleccionPestanna]'
})
export class SeleccionPestannaDirective {

  private htmlElement:ElementRef<HTMLElement>;


  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement= el;
  }

  @Input() set seleccionado(valor:boolean){
    if(valor){ // hecho click en esta pestaña
      this.htmlElement.nativeElement.classList.add("active2");
    }else{
      this.htmlElement.nativeElement.classList.remove("active2");
    }
  }

}
