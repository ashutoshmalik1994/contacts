import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTACTS } from './constants/routes';

const routes: Routes = [
  { path: '', redirectTo: CONTACTS, pathMatch: 'full' },
  { path: CONTACTS, loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
