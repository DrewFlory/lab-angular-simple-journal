import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntriesService } from './services/entries.service';
import { EntryComponent } from './entry/entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
