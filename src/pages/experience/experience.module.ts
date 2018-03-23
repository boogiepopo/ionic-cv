import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperiencePage } from './experience';
import { ExpandableComponent } from '../../components/expandable/expandable'; //For accordion effect.

@NgModule({
  declarations: [
    ExperiencePage,
    ExpandableComponent, //This needs to be HERE, not under app.module.ts
  ],
  imports: [
    IonicPageModule.forChild(ExperiencePage),
  ],
  exports: [
    ExperiencePage
  ]
})
export class ExperiencePageModule {}


