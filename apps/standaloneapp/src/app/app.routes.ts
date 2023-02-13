import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'game/:id',
    loadChildren: () =>
      import('@bg-hoard1/feature-a').then((m) => m.featureARoutes),
      runGuardsAndResolvers: 'always'
    },
];
