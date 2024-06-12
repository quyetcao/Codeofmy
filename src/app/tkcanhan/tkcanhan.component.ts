import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { jwtDecode } from 'jwt-decode';
import { TaskcuatoiComponent } from '../taskcuatoi/taskcuatoi.component';

@Component({
  selector: 'app-tkcanhan',
  standalone: true,
  imports: [TaskcuatoiComponent],
  templateUrl: './tkcanhan.component.html',
  styleUrl: './tkcanhan.component.css'
})
export class TkcanhanComponent implements OnInit{
  constructor(private UserSrv:UserService){}
  token:any;
  user:any;

  // @Output() idUser1 = new EventEmitter<any>
  userid:any;
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(this.token){
      this.user=jwtDecode(this.token);
      console.log(this.user);
      this.userid=this.user.id
    }
  }
  

  // idUser(iduser:any){
  //   console.log(iduser);
  //   this.idUser1.emit(iduser);
  // }
 

}
