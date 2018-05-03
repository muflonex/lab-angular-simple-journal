import { Injectable } from "@angular/core";
import 'rxjs'
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable'

export interface list {
  _id: number;
  title: string;
  content: string;
  date: Date;
}

@Injectable()
export class GetApiListService {
  BASE_URL='http://localhost:3000/api/journal-entries'
  list: Array<list> = [];

  constructor(private http: Http) {}
  getList(): Observable<any> {
    return this.http.get(this.BASE_URL)
    .map((res: Response) => res.json());
  }
  getEntry(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${id}`)
    .map((res: Response) => res.json());
  }
  createEntry(event){
    return this.http.post(`${this.BASE_URL}`, event)
    .map(res => res.json())
  }
}
