import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User ;
  constructor(private route:Router) {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  loginUser() {
    if(this.user.email == "admin@gmail.com" && this.user.password == "admin") {
      this.route.navigate(['home']);
    } else {
      alert("Invalid Credentials");
    }
  }
}
