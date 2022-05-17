import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-asset-step2',
  templateUrl: './create-asset-step2.component.html',
  styleUrls: ['./create-asset-step2.component.scss']
})
export class CreateAssetStep2Component implements OnInit {


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  @Output() step2Event: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  variableIncomeTypes: string[] = ['stock', 'fii', 'etf'];
  fixedIncomeTypes: string[] = ['tesouro direto', 'lci', 'lca', 'cdb', 'cri', 'cra'];

  form = this.fb.group({
    ticker: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]],
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(60)
    ]],
    assetClass: ['', Validators.required],
    type: ['', Validators.required],
  })

  get assetTicker(){
    return this.form.controls['ticker'];
  }

  get assetClass(){
    return this.form.controls['assetClass'];
  }

  onCreateAsset(){
    this.step2Event.emit(this.form);
  }

}


// id: number;
// assetClass: string;
// type: string;
// name: string;
// ticker: string;;
// quantity: number;
// averagePrice: number;
// brokerId: number;
// assetRecordsIds: number[];
