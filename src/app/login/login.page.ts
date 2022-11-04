import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {

  token ='LocalStorage';

constructor(
  private router: Router,
  private storage: Storage
){}

ngOnInit() {
  localStorage.clear()
}



login(){
localStorage.setItem('tokem',this.token)
this.router.navigate(["/veralumno"]);
 }
}
