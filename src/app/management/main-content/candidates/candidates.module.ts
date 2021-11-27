import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import {
  DxDataGridModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    CandidatesComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    DxDataGridModule
  ]
})
export class CandidatesModule { }
