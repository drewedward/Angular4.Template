import { Component, TemplateRef, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-resource-one',
  templateUrl: './resource-one.component.html',
  styleUrls: ['./resource-one.component.css']
})
export class ResourceOneComponent implements OnInit {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  ngOnInit() {
  }
}
