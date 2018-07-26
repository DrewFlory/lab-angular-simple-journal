import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntriesService {

  newJournalEntry:any = {
    title: String,
    content: String
  };

  constructor(private http: Http) { }

  getRandom() {
    return this.http.get(`http://localhost:3000/api/journal-entries`)
      .map((res) => res.json());
  }

  createEntry(newJournalEntry) {
    return this.http.post(`http://localhost:3000/api/journal-entries`, newJournalEntry)
      .map((res) => res.json());
  }
} 