import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Asset } from 'src/app/asset/asset';
import { AssetService } from '../asset/asset.service';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
  }

  asset: Asset = new Asset();

  addBroker(form1: FormGroup){
    this.asset.brokerId = form1.controls['brokerId'].value;
  }

  addAssetInformation(form2: FormGroup){
    this.asset.ticker = form2.controls['ticker'].value;
    this.asset.name = form2.controls['name'].value;
    this.asset.assetClass = form2.controls['assetClass'].value;
    this.asset.type = form2.controls['type'].value;
    console.log(this.asset);
    this.assetService.postAsset(this.asset);
  }

}
