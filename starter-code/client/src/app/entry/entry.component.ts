import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private entries: EntriesService) { }

  ngOnInit() {
  }

  entry: any;
  getRandomJoke() {
    this.entries.getRandom()
    .subscribe((entry)=> this.entry = entry);
   }
}
