import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetApiListService } from '../getApiList.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entry: Object;
  
  constructor(
    route: ActivatedRoute,
    public router: Router,
    private getApiListService:GetApiListService 
  ) {route.params.subscribe(entry => {
    getApiListService.getEntry(entry.id).subscribe( e => {
      this.entry = e;
      
    })
  }) }

  ngOnInit() {
  }

}
