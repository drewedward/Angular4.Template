import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  showLoader: boolean;

  constructor(private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

}
