import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://localhost:3000/users/`;
  constructor(private httpServiceUser: HttpClient) { }

  getAll() {
    return this.httpServiceUser.get(this.url);
  }
  createUser(user: User) {
    return this.httpServiceUser.post(this.url, user);
  }
  login(datalogin:any){
    return this.httpServiceUser.post(this.url+'/login', datalogin);
  }
  delete(id: any) {
    return this.httpServiceUser.delete(this.url + id);
  }
}



