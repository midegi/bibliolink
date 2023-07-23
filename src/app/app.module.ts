import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// https://github.com/FortAwesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookfinderComponent } from './components/bookfinder/bookfinder.component';
import { LendbookComponent } from './components/lendbook/lendbook.component';

/* Declarations: quando si crea un component viene inserito in declarations, quando utilizziamo 
  la CLI tramite ng generate component <path> per generare dei components. 
  Il component generato viene inserito automaticamente in declaration */

/* Imports: negli imports, invece, ogni volta che si importa un modulo esterno viene definito in questa sezione,
Un esempio è  BrowserModule, utilizzato per interagire con il DOM,   */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookshelfComponent,
    AddbookComponent,
    BookfinderComponent,
    LendbookComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
