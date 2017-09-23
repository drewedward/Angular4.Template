import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'resource-one-details',
  templateUrl: './resource-one-details.component.html',
  styleUrls: ['./resource-one-details.component.css']
})
export class ResourceOneDetailsComponent implements OnInit {
  private id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params["id"]);
    // can then take params and send them into service
   }

  ngOnInit() {
  }

}
