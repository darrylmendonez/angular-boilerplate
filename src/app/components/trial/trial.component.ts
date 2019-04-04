import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITArea } from './../../models/trial.model';
import { TAreaData } from './../../data/tArea.data';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss'],
})
export class TrialComponent implements OnInit {
  tAreas: ITArea[];
  trialParams: string;
  currentParams: string;
  currentTArea;
  currentDisease;
  currentTrial;
  currentCompoundInfo;

  constructor(
    private route: ActivatedRoute
    ) {
      this.trialParams = route.snapshot.params['trialParams'];
    }

  stringCheck(data) {
    return typeof data === 'string';
  }

  loadData(diseaseName) {
    console.log('diseaseName = ', diseaseName);
    this.tAreas = TAreaData;
    console.log('tAreas = ', this.tAreas);
    console.log('trialParams = ', this.trialParams);
    this.currentParams = diseaseName || this.trialParams;
    console.log('currentParams = ', this.currentParams);
    if ((this.currentParams === 'gpp')) {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ppp') {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'pso') {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[2];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc1') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc2') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[1];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc3') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[2];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'cd') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln') {
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln1') {
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln2') {
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[1];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ssc-ild') {
      this.currentTArea = this.tAreas[3];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'pf-ild') {
      this.currentTArea = this.tAreas[3];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    console.log('this.currentTArea = ', this.currentTArea);
    console.log('this.currentDisease', this.currentDisease);
    console.log('this.currentTrial', this.currentTrial);
    console.log('this.currentCompoundInfo', this.currentCompoundInfo);
  }

  ngOnInit() {
    this.loadData(this.trialParams);
  }
}
