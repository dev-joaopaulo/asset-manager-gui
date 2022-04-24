import { Component, OnInit } from '@angular/core';
import { BrokerService } from './broker.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent {

  constructor(private brokerService: BrokerService) { }

  getBroker(){
    this.brokerService.getBroker(1).subscribe(
      data => console.log(data.name)
    )
  }


}
