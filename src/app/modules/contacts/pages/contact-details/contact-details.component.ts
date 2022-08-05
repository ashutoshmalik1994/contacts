import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../_services/contact.service';
import { ActivatedRoute } from '@angular/router'
import { ContactsInterface } from '../../../../interfaces/contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  userId: any
  constructor(
    private _contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.paramMap.get('id')
  }

  contactDetails: ContactsInterface = {};

  ngOnInit(): void {
    this._contactService.getContactDetails(this.userId.toString()).subscribe({
      next: (response) => {
        this.contactDetails = response;
        console.log(this.contactDetails)
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }

}
