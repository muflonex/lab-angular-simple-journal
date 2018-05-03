import { Component, OnInit } from '@angular/core';
import { GetApiListService } from '../getApiList.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  list2: Array<Object>;
  constructor(private list: GetApiListService) { }

  ngOnInit() {
   this.getApiList();
  }

  getApiList(){
    this.list.getList()
    .subscribe(list => {this.list2 = list; console.log(list)})
  }
  createEntry(event){
     console.log(event)
     if(event.title && event.content) 
     this.list.createEntry(event).subscribe(()=>this.getApiList())
  }
  
}
