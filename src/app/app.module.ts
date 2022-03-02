import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { OrginComponent } from './orgin/orgin.component';
import { HttpClientModule } from '@angular/common/http';
import {TextFieldModule} from '@angular/cdk/text-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    OrginComponent,
    UserhomeComponent,
    AdminhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
