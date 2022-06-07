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

  @Output() step1Event: EventEmitter<number> = new EventEmitter<number>();

  brokers: Broker[] = [];

  onChoose(brokerId: number){
    this.step1Event.emit(brokerId);
    console.log(brokerId);
  }

  getAllBrokers(){
    this.brokerService.getBrokers().subscribe(
      data => this.brokers = data
    );
  }

}
