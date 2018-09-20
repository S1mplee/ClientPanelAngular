import { Injectable } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
  import { Client } from '../models/client';
  // tslint:disable-next-line:import-blacklist
  import { Observable } from 'rxjs';
@Injectable()
export class ClientsService {
clients: FirebaseListObservable<any[]>;
client: FirebaseListObservable<any>;
  constructor(public af: AngularFireDatabase) {
      this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
    }
    getClients() {
      return this.clients;
   }

   }





