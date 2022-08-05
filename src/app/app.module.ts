import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { ContactsService } from './dummy/constants'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ContactsService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
