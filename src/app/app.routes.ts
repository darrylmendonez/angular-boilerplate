import { HomeComponent } from './components/home/home.component';
import { TrialComponent } from './components/trial/trial.component';

export const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'trial', component: TrialComponent },
  { path: 'trial/:trialParams', component: TrialComponent },
  { path: '**', redirectTo: '', component: HomeComponent }
];
