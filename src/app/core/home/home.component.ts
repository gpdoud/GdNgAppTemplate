import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import * as shared from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private SystemSvc: shared.SystemService) { }

  ngOnInit() {
  	console.log(this.SystemSvc.system);
  }

}
