import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../_services/contact.service';
import { Router, NavigationExtras } from '@angular/router'
import { CONTACTS, EMAIL_ADDRESSES } from '../../../../constants/routes';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    private _contactService: ContactService,
    private router: Router
  ) { }

  contacts = [];

  ngOnInit(): void {
    this._contactService.getContactList().subscribe({
      next: (response) => {
        this.contacts = response;
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }

  userInfo(id: number) {
    this.router.navigateByUrl(`${CONTACTS}/${EMAIL_ADDRESSES}/${id}`);
  }

}
