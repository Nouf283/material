import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Items} from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public imageSrc = 'assets/Capture.PNG';  
  public Items:Items[]=[];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.Items=data as any;
      console.log(this.Items);
  });
}

  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this.http.get("https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products");
}

}



