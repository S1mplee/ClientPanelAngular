import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  Total = 0;
  constructor(public clientsservice: ClientsService) {
    this.clientsservice.getClients().subscribe(clients => {
      this.clients = clients;
      this.Total = this.getTotal(this.clients);
    });
   }
   getTotal(client: any[]) {
      let total = 0;
       for (let i = 0; i < client.length; i++) {
         total = total + parseFloat(client[i].balance);
       }
       return total;
   }

  ngOnInit() {
  }

}
