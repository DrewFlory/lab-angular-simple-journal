import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntriesService } from './services/entries.service';
import { EntryComponent } from './entry/entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from './about-page/about-page.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'entries/:id',  component: EntryDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryFormComponent,
    AboutPageComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
