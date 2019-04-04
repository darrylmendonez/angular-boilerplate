import { ITArea, IDisease } from './../models/trial.model';
import { TAreaData } from './../data/tArea.data';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor(
    private router: Router) { }

    // getDiseaseByTrialParams(trialParams: string): IDisease {
    //   return TAreaData.find((disease: IDisease) => disease)
    // }

}
