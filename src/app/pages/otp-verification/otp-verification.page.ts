import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  OTP: any = { first: '', second: '', third: '', forth: '', }

  otpController(event, next, prev, index) {

    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }

}
