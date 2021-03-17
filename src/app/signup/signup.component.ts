import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'ngx-snackbar';
import { information } from '../modal/information';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {
  constructor(private snackbar: SnackbarService) {}
  information;
  parsedata;
  submitsignup(sign) {
    this.information = sign.value;
    console.log(sign.value);
    if (!window.navigator.onLine) {
      this.snackbar.add({
        msg: 'You are offline.Connect to internet and try again',
        background: '#ffcccb',
        color: 'red',
        timeout: 8000,
        action: {
          text: 'Close',
          color: 'red',
        },
      });
      return;
    }
    // console.log(labtest.value);
    if (sign.invalid) {
      this.snackbar.add({
        msg: 'Some fields are invalid please check your data',
        background: '#ffcccb',
        color: 'red',
        timeout: 8000,
        action: {
          text: 'Close',
          color: 'red',
        },
      });
    } else {
      const data: information = {
        firstname: this.information.firstname,
        middlename: this.information.middlename,
        lastname: this.information.lastname,
        address: this.information.address,
        gender: this.information.gender,

        DOB: this.information.DOBirth,

        Email: this.information.Email,
        contact: this.information.contact,
        citytown: this.information.citytown,
        maritalStatus: this.information.maritalStatus,
      };
      this.snackbar.add({
        msg: 'You Have Been Successfully Registered',
        background: 'green',
        color: 'white',
        timeout: 8000,
        action: {
          text: 'Close',
          color: 'red',
        },
      });
const jsdata= JSON.stringify(data);
this.parsedata= JSON.parse(jsdata);
console.log(this.parsedata);
this.snackbar.add({
  msg:'your Data is : ' + this.parsedata.firstname +" " + 
  this.parsedata.lastname +" " + this.parsedata.address +" " +
   this.parsedata.Email +" " + this.parsedata.DOB ,
   background: '#ffcccb',
  color: 'black',
  timeout: 8000,
  action: {
    text: 'Close',
    color: 'red',
  },
});
      //console.log(data);
    }
  }
  ngOnInit(): void {}
}
