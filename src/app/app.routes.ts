import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'payment-methods',
    title: 'Payment Methods',
    loadComponent: () => import('./payment-methods/payment-methods.component'),
    children: [
      {
        path: 'paypal-payment',
        title: 'Paypal Payment',
        loadComponent: () =>
          import('./payment-methods/pages/paypal-payment-page/paypal-payment-page.component'),
      },
      {
        path: 'binance-payment',
        title: 'Binance Payment',
        loadComponent: () =>
          import(
            './payment-methods/pages/binance-payment-page/binance-payment-page.component'
          ),
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
