import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotebookComponent } from './components/notebook/notebook.component';

@NgModule({ 
  declarations: [
    AppComponent,
    NotebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
