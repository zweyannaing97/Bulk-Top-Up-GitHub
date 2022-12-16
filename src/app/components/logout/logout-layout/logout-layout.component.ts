import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router,Event, NavigationEnd } from '@angular/router';
import { ConfirmAlertComponent } from "../../../modals/confirm-alert/confirm-alert.component";
import { Location } from "@angular/common";

@Component({
  selector: 'app-logout-layout',
  templateUrl: './logout-layout.component.html',
  styleUrls: ['./logout-layout.component.scss']
})
export class LogoutLayoutComponent implements OnInit {

  constructor(public router: Router,public dialog: MatDialog,private location: Location) { }

  ngOnInit(): void {
    this.logout();
  }
  logout(){
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '550px',
      height:'200px',
      data: {
        message: 'Do you sure want to logout?',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        image: 'assets/img/logout_confirm.png'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['../../auth/login']);
      }
      else {
        this.location.back()
      }
    });
  }
}
