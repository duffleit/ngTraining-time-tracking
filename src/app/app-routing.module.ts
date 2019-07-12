import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategy } from './preoloading.strategy';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'records' },
  { path: 'records/:id', data: { preload: true }, loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'records', data: { preload: false }, loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

