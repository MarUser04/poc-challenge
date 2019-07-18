import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FilledFormComponent } from './components/filled-form/filled-form.component';
import { MainComponent } from './components/main/main.component';
import { FilledFormService } from './services/filled-form/filled-form.service';
import { FormService } from './services/form/form.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FilledFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FilledFormService,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
