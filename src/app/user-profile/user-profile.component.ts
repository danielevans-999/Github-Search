import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../requests.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:any

  constructor(private userService:RequestsService) { }

  ngOnInit() {
  }

}
