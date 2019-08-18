import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../Services/api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    return this.apiService.getForecast48Hour().subscribe((x => { console.log((x))}))

  }

}
