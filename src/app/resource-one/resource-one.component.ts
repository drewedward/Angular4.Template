import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-one',
  templateUrl: './resource-one.component.html',
  styleUrls: ['./resource-one.component.css']
})
export class ResourceOneComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
}
