import { Component,Input, OnInit } from '@angular/core';
import { TaskApiService } from '../api/task/task-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskcuatoi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskcuatoi.component.html',
  styleUrl: './taskcuatoi.component.css'
})
export class TaskcuatoiComponent  implements OnInit{
  @Input() iduser:any;
  list_task_of_my:any;
  constructor(private TaskSrv:TaskApiService){}
  ngOnInit(): void {
    console.log(this.iduser);
   this.TaskSrv.getTaskofUser(this.iduser).subscribe((data:any)=>{
    console.log(data.data.rows);
       this.list_task_of_my=data.data.rows;
      this.list_task_of_my.forEach( (a:any) => {
       if(a.tinh_trang == 0){
        a.tinh_trang='ok';
       }
        
      });
       if(this.list_task_of_my.status == 0){
        this.list_task_of_my.status =`ok`;
       }
   })
  }
}
