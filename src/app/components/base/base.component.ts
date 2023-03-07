import { Component, OnInit } from '@angular/core';
import { SwitchLoginService } from 'src/app/services/switch-login.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(public switchLoginService:SwitchLoginService) { }

  ngOnInit(): void {
  }

}
