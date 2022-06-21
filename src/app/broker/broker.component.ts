import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Broker } from './Broker';
import { BrokerService } from './broker.service';
import { filter } from 'rxjs';
import { openUpdateBrokerDialog } from './update-broker/update-broker.component';
import { MatDialog } from '@angular/material/dialog';
import { openDeleteBrokerDialog } from './delete-broker/delete-broker.component';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit{

  constructor(private brokerService: BrokerService,
              private router: Router,
              private dialog: MatDialog) {
    //Subscribes to router events to update brokers list
    router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(
      () => {
        this.getAllBrokers()
      });
  }

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
    this.brokerService.getBrokerById(1).subscribe();
  }

  editBroker(broker: Broker){
    openUpdateBrokerDialog(this.dialog, broker)
      .pipe(
          filter(val => !!val)
      )
      .subscribe(
        brokerForm => {
          broker.name = brokerForm['name'];
          broker.description = brokerForm['description'];
          this.brokerService.updateBroker(broker.id, broker)
            .subscribe(
              result => this.getAllBrokers()
            )
        }
      );
  }

  deleteBroker(brokerId: number){

    openDeleteBrokerDialog(this.dialog).subscribe(
      val => {
        if(val === true){
          this.brokerService.deleteBroker(brokerId).subscribe(
            data => this.getAllBrokers()
          );
        }
      }
    )
  }


}
