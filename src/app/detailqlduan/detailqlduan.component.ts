import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DuanApiService } from '../api/duan/duan-api.service';
import { Duan } from '../interface/duan';
import { UserService } from '../api/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailqlduan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailqlduan.component.html',
  styleUrl: './detailqlduan.component.css'
})
export class DetailqlduanComponent implements OnChanges {
  constructor(private http: DuanApiService,
    private http2: UserService
  ) { }
  id_du_an: any;
  du_an: any;
  chiphi: number = 0;
  so_thanh_vien = '';
  id_leader = '';
  arrnv: number[] = [];
  nam: number = 0;
  trung: number = 0;
  bac: number = 0;
  nghibac:number=0;
  nghinam:number=0;
  nghitrung:number=0;
  @Input() id = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.id);
    this.id_du_an = this.id;
    this.load();
  }


  load() {
    this.http.getOne(this.id_du_an).subscribe((response: any) => {
      console.log(response)
      this.du_an = response.data.rows[0];
      this.chiphi = response.data.rows[0]['chiphi'];
      this.so_thanh_vien = response.data.rows[0]['so_thanh_vien'];
      this.id_leader = response.data.rows[0]['leader'];
      this.arrnv = response.data.rows[0]['thanhvien'] as number[];
      this.arrnv.forEach(item => {
        this.http2.getoneuser(item).subscribe((data: any) => {
          if (data.data.khuvuc === 'Bắc') {
            this.bac += 1;
          } else if (data.data.khuvuc === 'Nam') {
            this.nam += 1;
          } else {
            this.trung += 1;
          }
        }
        )
      });


      this.arrnv.forEach(item => {
        this.http2.getoneuser(item).subscribe((data: any) => {
          if (data.data.khuvuc === 'Bắc' && data.data.status === 0) {
            this.nghibac += 1;
          } else if (data.data.khuvuc === 'Nam' && data.data.status === 0) {
            this.nghinam+= 0;
          } else if (data.data.khuvuc === 'Trung' && data.data.status === 0){
            this.nghitrung += 1;
          }
        }
        )
      });




    })
  }

}