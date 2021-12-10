import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest4',
  templateUrl: './quest4.component.html',
  styleUrls: ['./quest4.component.css']
})
export class Quest4Component implements OnInit {

  constructor() { }

  vlr:any;
  res:any;
  ngOnInit(): void {
  }

  fatorial(x:number){
    if(x <= 1){
      this.res = 1;
    }
    else{
      this.res = x*this.fatorial(x-1);
    }
    return this.res;
  }
  calcular(){
    this.fatorial(this.vlr);
  }
  

}
