import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  config = {
    loop: true
  };
  banners = ['/assets/images/banner/1.png', '/assets/images/banner/2.png', '/assets/images/banner/3.png'];

  searchOption = '0';

  constructor() {
  }

  ngOnInit() {
  }

  option(option) {
    this.searchOption = option;
  }

}
