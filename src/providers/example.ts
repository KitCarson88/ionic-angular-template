import { Injectable } from '@angular/core';
import { delay, timeout } from 'rxjs/operators';

import { Api } from './api/api';
import { ServiceLocator } from '../services/locator.service';
import { environment } from '../environments/environment';
import { constants } from '../utils/constants';

@Injectable({
    providedIn: 'root'
})
export class ExampleProvider
{
    private serviceReturnManagement(call: Promise<any>)
    {
        return call
            .then(response => {
                let data = response['data'];
                if (!data.length)
                    data = '{}';

                return JSON.parse(data);
            })
            .catch(error => {
                console.log('ExampleProvider service error: ', error);
                throw error;
            });
    }

    retrieveExampleData()
    {
        let api: Api = ServiceLocator.injector.get(Api);

        //Only if mock flag true, retrieve data from json mock
        if (environment.mock)
            return api.debugGet('assets/mock-data/get-example-data.json').pipe(delay(2000), timeout(3000)).toPromise();

        /*let urlPoisList = environment.baseUrl + environment.baseVersion + constants.exampleEndpoint;

        let header = {
            'Content-Type': 'application/json'
        };

        return this.serviceReturnManagement(api.get(urlPoisList, {}, header));*/
    }
}