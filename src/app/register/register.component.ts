import { Component } from '@angular/core';
import { NgForm,FormsModule,NgModel } from '@angular/forms';
import { UserService } from '../api/user/user.service';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private UserSrv:UserService,
            private route:Router,) {}

err:any;

  onSubmit(formregister:NgForm){
    console.log(formregister.value);
    this.UserSrv.createUser(formregister.value).subscribe((response:any)=>{
      console.log(response);
      alert('Đăng ký thành công');
      this.route.navigate(['/login']);
    },(error)=>{
this.err=error;
    })
  }
}
