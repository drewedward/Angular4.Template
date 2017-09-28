import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { Wizard } from 'clarity-angular';

@Component({
  selector: 'app-resource-one',
  templateUrl: './resource-one.component.html',
  styleUrls: ['./resource-one.component.css']
})
export class ResourceOneComponent implements OnInit {
  @ViewChild("wizard") wizard: Wizard;
  private modalOpen: boolean = false;
  private wizardOpen: boolean = false;
  
  private submitted: boolean = false;

  public modalModel: any; // will have an actual class/interface for this
  public model: any; // will have an actual class/interface for this

  constructor() {
  }

  ngOnInit() {   
    this.modalModel = {
      forceReset: false,
      contactInfo: ""
    };

    this.model = {
      forceReset: false,
      name: "",
      favorite: "",
      number: ""
    };
  }

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form)
  } 
  get diagnostic() {
    return JSON.stringify(this.modalModel);
  }

  public doFinish(): void {
    this.doReset();
  }

  public doReset(): void {
    if (this.model.forceReset) {
        this.wizard.reset();
        this.model.name = "";
        this.model.favorite = "";
        this.model.number = "";
    }
}
}
