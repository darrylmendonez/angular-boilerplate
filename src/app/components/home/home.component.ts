import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITArea } from '../../models/trial.model';
import { TAreaData } from '../../data/tArea.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tAreas: ITArea[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.tAreas = TAreaData;
    console.log('tAreas = ', this.tAreas);
  }

}
