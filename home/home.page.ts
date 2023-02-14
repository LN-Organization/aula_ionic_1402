import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1: string='';
  n2: string='';
  res:number=0;
  res2:number=0;
  res3:number=0;
  res4:number=0;

  constructor() {}

  somar() {
    this.res=parseFloat(this.n1)+parseFloat(this.n2);
  }
  subtrair() {
    this.res2=parseFloat(this.n1)-parseFloat(this.n2);
  }
  multiplicar() {
    this.res3=parseFloat(this.n1)*parseFloat(this.n2);
  }
  divisao() {
    this.res4=parseFloat(this.n1)/parseFloat(this.n2);
  }

  //exibirMensagem(){
  //  this.mensagem='Vai tomar no cu';
 // }

}
