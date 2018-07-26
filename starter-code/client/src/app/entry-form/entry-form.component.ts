import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  constructor(private entries: EntriesService) { }

  ngOnInit() {
  }

  newEntryStuff:any = {}

  createEntry(){
      this.entries.createEntry(this.newEntryStuff)
      .subscribe((entry)=> {
        
      })
     
  }}
