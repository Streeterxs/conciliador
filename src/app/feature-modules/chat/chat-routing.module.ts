import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { UserActiveGuard } from '../../core/guards/user-active.guard';

const routes: Routes = [
  {path: '', component: ChatComponent, canActivate: [UserActiveGuard]},
  { path: '**', redirectTo: '/', canActivate: [UserActiveGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
