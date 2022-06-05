import { Component, OnInit,Input } from '@angular/core';
import {Items} from '../items/item';

@Component({
  selector: 'app-child-items',
  templateUrl: './child-items.component.html',
  styleUrls: ['./child-items.component.css']
})
export class ChildItemsComponent implements OnInit {
  public imageSrc = 'assets/Capture.PNG';  
  @Input() item :Items;
  //public item:Items;
  constructor() { 
    this.item= new Items();

  }

  ngOnInit(): void {
  }

}
