import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest2',
  templateUrl: './quest2.component.html',
  styleUrls: ['./quest2.component.css']
})
export class Quest2Component implements OnInit {

  constructor() { }

  vl1: any;
  vl2: any;
  operador : string = '+';
  result:any;

  ngOnInit(): void {
  }


  calcular() {
    console.log(this.vl1);
    console.log(this.vl2);
    console.log(this.operador);
  

 
    switch (this.operador) {
      case "+":
        this.result = this.soma(this.vl1, this.vl2);
        break;
      case "-":
        this.result = this.subtracao(this.vl1, this.vl2);
        break;
      case "/":
        this.result = this.divisao(this.vl1, this.vl2);
        break;
      case "*":
        this.result = this.multi(this.vl1, this.vl2);
        break;
    }
    console.log(this.result);
  }
  soma(n1: number, n2: number) {

    return n1 + n2;

  }
  subtracao(n1: number, n2: number) {

    return n1 - n2;
  }

  divisao(n1: number, n2: number) {

    return n1 / n2;
  }
  multi(n1: number, n2: number) {

    return n1 * n2;
  }

}

