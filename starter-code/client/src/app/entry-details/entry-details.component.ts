import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service'

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {


  theActualEntry:any;

  constructor(private theRoutingThingy: ActivatedRoute,
    private myService: EntriesService) { }

  ngOnInit() {
    this.theRoutingThingy.params
    .subscribe((params) => {
      this.myService.getOneEntry(params['id'])
      .subscribe((theEntryFromService)=>{
        this.theActualEntry = theEntryFromService
      })
      
  })
  }
}
