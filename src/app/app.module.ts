import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Quest1Component } from './components/exercicios/quest1/quest1.component';
import { Quest2Component } from './components/exercicios/quest2/quest2.component';
import { Quest3Component } from './components/exercicios/quest3/quest3.component';
import { Quest4Component } from './components/exercicios/quest4/quest4.component';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Quest1Component,
    Quest2Component,
    Quest3Component,
    Quest4Component,
    PdfViewComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
