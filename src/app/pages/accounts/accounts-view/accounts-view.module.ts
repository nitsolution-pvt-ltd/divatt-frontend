import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsViewPageRoutingModule } from './accounts-view-routing.module';

import { AccountsViewPage } from './accounts-view.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AccountsViewPageRoutingModule
  ],
  declarations: [AccountsViewPage]
})
export class AccountsViewPageModule {}
