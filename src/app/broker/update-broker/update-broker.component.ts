import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Broker } from '../Broker';
import { BrokerService } from '../broker.service';

@Component({
  selector: 'app-update-broker',
  templateUrl: './update-broker.component.html',
  styleUrls: ['./update-broker.component.scss']
})
export class UpdateBrokerComponent implements OnInit {

  broker: Broker = new Broker;

  constructor(private fb: FormBuilder,
    private brokerService: BrokerService,
    private router: Router) {
    this.brokerService.getBrokerToBeUpdated().subscribe(
      broker => this.broker = broker
    );
  }

  ngOnInit() {
    this.setFormBrokerName(this.broker.name);
    this.setFormBrokerDescription(this.broker.description);
  }

  form = this.fb.group({
    name: ['', [
    Validators.required,
    Validators.minLength(2),
    ]],
    description: ['', [
    Validators.maxLength(30)
    ]]
  })

  get brokerName(){
    return this.form.controls['name'];
  }

  setFormBrokerName(brokerName: string){
    this.form.controls['name'].setValue(brokerName);
  }

  setFormBrokerDescription(brokerDescription: string){
    this.form.controls['description'].setValue(brokerDescription);
  }

  get brokerDescription(){
    return this.form.controls['description'];
  }

  onUpdateBroker(){
    this.broker.name = this.form.controls['name'].value;
    this.broker.description = this.form.controls['description'].value;
    this.brokerService.updateBroker(this.broker.id, this.broker).subscribe(
      data => this.router.navigate(['/brokers'])
    );
  }

}
