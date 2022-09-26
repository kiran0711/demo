import { Component, OnInit, Input } from '@angular/core';
import { dataList } from '../data';
@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {
title: any;
@Input() data: any;
list: any= dataList;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Data List'
    console.log(this.list['name']);
    console.log('demo', this.title, this.data);
  }

}
