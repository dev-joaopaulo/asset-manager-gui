import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-broker-delete',
  templateUrl: './delete-broker.component.html',
  styleUrls: ['./delete-broker.component.scss']
})
export class DeleteBrokerComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteBrokerComponent>) { }


  ngOnInit(): void {
  }

  delete(){
    let deleteBroker = true;
    this.dialogRef.close(deleteBroker);
  }

}

//__________________________________________________________________\\

export function openDeleteBrokerDialog(dialog: MatDialog){

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = dialog.open(DeleteBrokerComponent, config);

  return dialogRef.afterClosed();

}
