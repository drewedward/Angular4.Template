import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../../framework/services/loader.service';

@Component({
  selector: 'resource-one-details',
  templateUrl: './resource-one-details.component.html',
  styleUrls: ['./resource-one-details.component.css']
})
export class ResourceOneDetailsComponent implements OnInit {
  private id: number;

  constructor(private loaderService: LoaderService, 
              private route: ActivatedRoute) {
    this.loaderService.display(true);
    this.route.params.subscribe( params => this.id = params["id"]);
    // can then take params and send them into service
   }

  ngOnInit() {
    setTimeout(()=>this.loaderService.display(false), 1000);
  }

}
