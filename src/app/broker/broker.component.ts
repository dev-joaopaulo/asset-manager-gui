import { Component, OnInit } from '@angular/core';
import { Broker } from './Broker';
import { BrokerService } from './broker.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit{

  constructor(private brokerService: BrokerService) { }

  brokers: Broker[] = [];

  ngOnInit(){
    this.getAllBrokers();
  }

  getAllBrokers(){
    this.brokerService.getBrokers().subscribe(
      data => this.brokers = data
    );
  }

  getBroker(){
    this.brokerService.getBrokerById(1).subscribe(
      data => console.log(data.name)
    );
  }

  editBroker(broker: Broker){

  }


}
