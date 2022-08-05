import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list.component';
import { HeaderComponent } from '../header/header.component';

const inrRoute: Routes = [
    { path: '', component: ContactListComponent }
];

@NgModule({
    declarations: [ContactListComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(inrRoute)
    ]
})

export class ContactListModule { }
