import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsViewPage } from './accounts-view.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsViewPageRoutingModule {}
