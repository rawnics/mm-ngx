import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contacts', component: ContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
