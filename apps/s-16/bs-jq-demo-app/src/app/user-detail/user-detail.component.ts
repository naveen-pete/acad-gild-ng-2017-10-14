import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('#toggleUser').click(() => $('#user').toggle());
  }
}
