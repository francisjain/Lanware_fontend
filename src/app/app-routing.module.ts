import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { OrginComponent } from './orgin/orgin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: RegisterComponent },
  { path: 'register', component: LoginComponent },
  { path: '', component: OrginComponent },
  { path: 'orginaldash', component: DashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
