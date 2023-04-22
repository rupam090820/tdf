import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { FormsModule } from '@angular/forms';  //imported here
import { AppComponent } from './app.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFromComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
