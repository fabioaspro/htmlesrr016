import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoDividerModule, PoFieldModule, PoMenuModule, PoModalModule, PoModule, PoPageModule, PoTableModule, PoToolbarModule } from '@po-ui/ng-components';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'dn-range',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PoModalModule,
    PoTableModule,
    PoModule,
    PoFieldModule,
    PoDividerModule,
    PoButtonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    NgxMaskDirective,
  ],
  templateUrl: './dn-range.component.html',
  styleUrl: './dn-range.component.css',
  providers: [
    provideNgxMask()
  ]
})
export class DnRangeComponent {
  
  @Input() label: string = 'Periodo'
  @Input() tipo: string = ''
  @Input() cmask: string = ''
  @Input() inicial: any
  @Input() final: any
  @Input() cLabel: string = ''
  @Input() clabel!:string
  @Input() cini:string=''
  @Input() cfim:string=''
  @Output() ciniChange = new EventEmitter<string>();
  @Output() cfimChange = new EventEmitter<string>();
 
  retorno(): void {
    this.ciniChange.emit(this.cini)
    this.cfimChange.emit(this.cfim)
  }
  
}