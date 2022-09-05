import { MatSnackBar } from '@angular/material/snack-bar'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  constructor(private snackBar: MatSnackBar) { }

  showMsg( { msg } : { msg: string; } ): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }


}
