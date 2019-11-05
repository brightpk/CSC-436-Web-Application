import { UserLogin } from '../models/userlogin.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dbPath = 'userLogin';
  private userLoginList: UserLogin[];
  userLoginDatabase: AngularFireList<UserLogin>;

  constructor(private db: AngularFireDatabase) {
    this.userLoginDatabase = db.list(this.dbPath);
    this.getUseLoginList();
  }

  addNewUserLogin(newUserLogin: UserLogin): void {
    this.userLoginDatabase.push(newUserLogin);
  }

  login(userLogin: UserLogin): boolean {
    let existedUser = false
    this.userLoginList.forEach(data => {
      if (data.username === userLogin.username && data.password === userLogin.password) {
        localStorage.setItem('username', 'user');
        existedUser = true;
      } else {
        existedUser = false;
      }
    });
    return existedUser;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  getUser(): any {
    console.log(localStorage.getItem('username'));
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  getUseLoginList() {
    this.userLoginDatabase.snapshotChanges()
    .pipe(map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(login => {
      this.userLoginList = login;
    });
  }



}
