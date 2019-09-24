import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {appData} from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appData = appData;
  @Input() class;

  constructor() {
  }

  ngOnInit() {
  }

  enter(e) {
    e.target.className = 'hover';
  }

  leave(e) {
    e.target.className = '';
  }

}
