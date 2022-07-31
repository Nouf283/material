import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,
              public authService:AuthService) { }

  ngOnInit(): void {
  }

//   login(username: string, password: string) {
//     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }));
// }


  login(){
    // localStorage.setItem('token',"QzY0NjREMjkyQTI4RTU2RkE4MUJBRDExNzY1MUY1N0I4QjFCODlBOQ");
    // this.router.navigate(['/items']);
    this.authService.login("test","test");
    this.router.navigate(['/items']);
  }

}
