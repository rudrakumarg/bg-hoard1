import { Route } from '@angular/router';
import { FeatureAComponent } from './feature-a/feature-a.component';

export const featureARoutes: Route[] = [
  { path: '', pathMatch: 'full',  component: FeatureAComponent },
];
