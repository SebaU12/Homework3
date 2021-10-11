import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuCompComponent } from './components/menu-comp/menu-comp.component';
import { TableMenuComponent } from './components/table-menu/table-menu.component';
import { ApiService } from './service/api.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuCompComponent,
    TableMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
