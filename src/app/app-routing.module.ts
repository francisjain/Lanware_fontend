import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { OrginComponent } from './orgin/orgin.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: '', component: OrginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
