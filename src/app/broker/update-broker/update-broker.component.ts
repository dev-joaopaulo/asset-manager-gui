import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Broker } from '../Broker';

@Component({
  selector: 'app-update-broker',
  templateUrl: './update-broker.component.html',
  styleUrls: ['./update-broker.component.scss']
})
export class UpdateBrokerComponent implements OnInit {

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private brokerToBeUpdated: Broker,
    private dialogRef: MatDialogRef<UpdateBrokerComponent>) {
  }

  ngOnInit() {
  }

  form = this.fb.group({
    name: [this.brokerToBeUpdated.name, [
    Validators.required,
    Validators.minLength(2),
    ]],
    description: [this.brokerToBeUpdated.description, [
    Validators.maxLength(30)
    ]],
    id: [this.brokerToBeUpdated.id, Validators.required]
  })

  setFormBrokerName(brokerName: string){
    this.form.controls['name'].setValue(brokerName);
  }

  setFormBrokerDescription(brokerDescription: string){
    this.form.controls['description'].setValue(brokerDescription);
  }

  get brokerName(){
    return this.form.controls['name'];
  }

  get brokerDescription(){
    return this.form.controls['description'];
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }

}

//__________________________________________________________________\\

export function openUpdateBrokerDialog(dialog: MatDialog, broker: Broker){

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.data = {
    ...broker
  };

  const dialogRef = dialog.open(UpdateBrokerComponent, config);

  return dialogRef.afterClosed();

}
