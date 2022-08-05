import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details.component';

const inrRoute: Routes = [
    { path: '', component: ContactDetailsComponent }
];

@NgModule({
    declarations: [ContactDetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(inrRoute)
    ]
})

export class ContactDetailsModule { }
