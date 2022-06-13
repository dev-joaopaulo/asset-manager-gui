import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Broker } from '../Broker';
import { BrokerService } from '../broker.service';

@Component({
  selector: 'app-create-broker',
  templateUrl: './create-broker.component.html',
  styleUrls: ['./create-broker.component.scss']
})
export class CreateBrokerComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private brokerService: BrokerService) { }

  ngOnInit(): void {
  }

  broker: Broker = new Broker();

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

  get brokerDescription(){
    return this.form.controls['description'];
  }

  onCreateBroker(){
    this.broker.name = this.form.controls['name'].value;
    this.broker.description = this.form.controls['description'].value;
    this.brokerService.postBroker(this.broker);
  }

}
