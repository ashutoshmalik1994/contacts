import { Injectable } from '@angular/core';
import { CONTACTS_API } from '../../../constants/api-end-points';
import { HttpService } from '../../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private _http: HttpService
  ) { }

  getContactList() {
    return this._http.get(CONTACTS_API);
  }

  getContactDetails(id: string) {
    console.log("id", id)
    return this._http.get(`${CONTACTS_API}/${id}`);
  }

}
