import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {

  pdfSRC = "../../../assets/pdf/Teste Logica Programação I.pdf";
  constructor() { }

  ngOnInit(): void {  
  }

}
