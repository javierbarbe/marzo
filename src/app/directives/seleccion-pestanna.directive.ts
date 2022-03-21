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
    if(valor){ // es inválido, debe mostrarse
      this.htmlElement.nativeElement.classList.add("active");
    }else{
      this.htmlElement.nativeElement.classList.remove("active");
    }
  }

}
