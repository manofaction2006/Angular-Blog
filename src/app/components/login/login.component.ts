import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() login: EventEmitter<User> = new EventEmitter(); 
  email: string;
  password: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.login.emit({sno: 0, email: this.email, password: this.password});
  }

}
