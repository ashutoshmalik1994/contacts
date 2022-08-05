import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from "./contacts.component";
import { LIST, EMAIL_ADDRESSES } from '../../constants/routes';
import { ContactService } from './_services/contact.service';

const inrRoute: Routes = [
    {
        path: '', component: ContactsComponent, children: [
            { path: '', redirectTo: LIST, pathMatch: 'full' },
            { path: LIST, loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListModule) },
            { path: `${EMAIL_ADDRESSES}/:id`, loadChildren: () => import('./pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule) }
        ]
    }
];

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(inrRoute),
    ],
    providers: [ContactService]
})

export class ContactsModule { }
