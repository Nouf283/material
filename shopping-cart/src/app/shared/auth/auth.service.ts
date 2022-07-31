import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/Common/user";

@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthService{
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public user: User= new User();

    constructor() {
       this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    IsLoggedIn(){
        return !!localStorage.getItem('token');
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
        debugger;
        this.user.firstName="nouf";
        this.user.lastName="awal";
        this.user.token="QzY0NjREMjkyQTI4RTU2RkE4MUJBRDExNzY1MUY1N0I4QjFCODlBOQ";
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.currentUserSubject.next(this.user);
        return this.user;
    }

    // logout() {
    //     localStorage.removeItem('currentUser');
    //     let user= null;
    //     this.currentUserSubject.next(new User());
    // }

}