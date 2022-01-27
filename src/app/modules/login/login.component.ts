import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    // se e solo se l'utente è loggato vengo reindirizzato in home
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
   }

  ngOnInit(): void {
  }


  login(user: string, password: string) {
    if (user !== '' && password !== '') {
      this.authService.login(user, password);
      this.router.navigate(['home']);
    }
    
  }

  
}
