import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { EmailComponent } from './common/email/email.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EmailComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
