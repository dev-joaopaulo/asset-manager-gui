import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Broker } from 'src/app/broker/Broker';
import { BrokerService } from 'src/app/broker/broker.service';

@Component({
  selector: 'create-asset-step1',
  templateUrl: './create-asset-step1.component.html',
  styleUrls: ['./create-asset-step1.component.scss']
})
export class CreateAssetStep1Component implements OnInit {

  constructor(
    private fb: FormBuilder,
    private brokerService: BrokerService
    ) { }

  ngOnInit(): void {
      this.getAllBrokers();
  }

  @Output() step1Event: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  brokers: Broker[] = [];

  form = this.fb.group({
    brokerId: ['', Validators.required]
  })

  onChoose(){
    this.step1Event.emit(this.form);
    console.log(this.form.controls['brokerId'].value);
  }



  getAllBrokers(){
    this.brokerService.getBrokers().subscribe(
      data => this.brokers = data
    );
  }

}
