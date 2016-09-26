import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';


import { ConnectedClient } from './model/index';

@Injectable()
export class ClientsService {
    constructor(private http: Http) {

    }

    getClients(serverIp: string): Promise<ConnectedClient[]> {    
        return this.http
            .get(`app/clients/?server=${serverIp}`)
            .toPromise()
            .then(response => {
                return response.json().data[0].clients as ConnectedClient[];
            });
    }
}

