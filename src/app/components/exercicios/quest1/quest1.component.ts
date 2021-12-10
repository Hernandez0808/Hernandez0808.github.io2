import { Component, OnInit } from '@angular/core';
import { Qst1 } from './models/qst1';

@Component({
  selector: 'app-quest1',
  templateUrl: './quest1.component.html',
  styleUrls: ['./quest1.component.css']
})
export class Quest1Component implements OnInit {

  arrayDesordenado = [8, 4, 6, 9, 2, 5, 10, 7, 1, 3];

  public arrayOrdenado:Qst1[] = [];
  constructor() { }

  ngOnInit(): void {
    this.ordenacao();
  }

  ordenacao() {
    
this.arrayDesordenado.forEach((vlr,i)=>{
  let obj = {nuString:'', vlr:1}

  switch (this.arrayDesordenado[i]) {
    case 1:
      obj.nuString = "um";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 2:
      obj.nuString = "dois";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 3:
      obj.nuString = "três";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 4:
      obj.nuString = "quatro";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 5:
      obj.nuString = "cinco";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 6:
      obj.nuString = "seis";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 7:
      obj.nuString = "sete";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 8:
      obj.nuString = "oito";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 9:
      obj.nuString = "nove";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
    case 10:
      obj.nuString = "dez";
      obj.vlr = vlr;
      this.arrayOrdenado.push(obj);
      break;
  }

  this.arrayOrdenado.sort((a, b) => {
    if (a.vlr > b.vlr) {
      return 1;
    } else {
      return -1;
    }
  });
});

    



  }

}
