import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Tic-Tac-Toe'},
  {path:'Tic-Tac-Toe',component:BoardComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
