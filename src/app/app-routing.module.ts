import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'conciliador', loadChildren: './feature-modules/feature-modules.module#FeatureModulesModule' },
  { path:'home', loadChildren: './home/home.module#HomeModule' },
  { path:'chat', loadChildren: './chat/chat.module#ChatModule' },
  { path: '', redirectTo: 'conciliador', pathMatch: 'full'},
  { path: '**', redirectTo: 'conciliador'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
