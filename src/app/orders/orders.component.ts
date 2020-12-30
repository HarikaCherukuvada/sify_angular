import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderid: string;
  productid: string;
  buyerid: string;
  review: string = '';
  orderstatus: string = '';
  iscancelled: string = '';
  rating: Int32Array;
  username: any;
  msg: string;
  data: string;

  constructor(public usernService: UsernService) { 
    this.username = localStorage.getItem('username');
    this.username = '';
  }

  ngOnInit(): void {
    // this.getprofile();
   this.usernService.viewordersbybuyerid('5fe60f12fc3e432ebdc4dcd7').subscribe(data => {
    console.log(data);
    this.data = data;
  });
  }

  getprofile(): void {
    if (!this.username) {
      this.msg = 'User not logged in. Login please';
      return;
    } else {
      this.usernService.getprofile(this.username).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
  }
}
