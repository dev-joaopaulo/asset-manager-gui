import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '../asset/asset';
import { AssetService } from '../asset/asset.service';

@Component({
  selector: 'asset-card-list',
  templateUrl: './asset-card-list.component.html',
  styleUrls: ['./asset-card-list.component.scss']
})
export class AssetCardListComponent implements OnInit{

  constructor(private assetService: AssetService) {}

  @Input() type: string;

  ngOnInit(){
    this.assetService.getAssets().subscribe(
      data => {
        this.assets = data;
      }
    )
    console.log(this.assets);
    //this.getFilteredAssets();
  }

  assets : Asset[] = [];
  filteredAssets : Asset[] = [];

  getFilteredAssets(): void{
    var allAssets = this.assets;
    allAssets.forEach(asset => {
      if(asset.type == this.type){
        this.filteredAssets.push(asset)
      }
    });
    console.info(this.filteredAssets);
  }

}
