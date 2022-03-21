import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    DropdownModule,
    CarouselModule,
    ButtonModule,
    RippleModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
