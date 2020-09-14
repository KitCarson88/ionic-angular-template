import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

import { constants } from '../../utils/constants';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api
{
  constructor(private http: HTTP, private debugHttp: HttpClient)
  {
    this.http.setRequestTimeout(constants.SERVICE_TIMEOUT);
  }

  debugGet(endpoint: string)
  {
    return this.debugHttp.get(endpoint + "?" + new Date().getTime())
      .pipe(map(data => {
        console.log(`Received get ${ endpoint }: `, data);
        return data;
      }, catchError(error => {
        console.log("An error occured on debugGet: ", error);
        throw(error);
      })));
  }

  async get(endpoint: string, params?: any, header?: any)
  {
      console.log("Executing get: ", { endpoint, header });
      let data = await this.http.get(endpoint, params, header);
      console.log(`Received get ${ endpoint }: `, data);
      return data;
  }

  async post(endpoint: string, body: any, header?: any, serializer?: 'urlencoded' | 'json' | 'utf8' | 'multipart')
  {
    if (serializer)
      this.http.setDataSerializer(serializer);

    console.log("Executing post: ", { endpoint, header, body });
    let data = await this.http.post(endpoint, body, header);
    console.log(`Received post ${ endpoint }: `, data);
    return data;
  }

  async delete(endpoint: string, params?: any, header?: any)
  {
    console.log("Executing delete: ", { endpoint, header });
    let data = await this.http.delete(endpoint, params, header);
    console.log(`Received delete ${ endpoint }: `, data);
    return data;
  }

  async put(endpoint: string, body: any, header?: any, serializer?: 'urlencoded' | 'json' | 'utf8' | 'multipart')
  {
    if (serializer)
      this.http.setDataSerializer(serializer);

    console.log("Executing put: ", { endpoint, header, body });
    let data = await this.http.put(endpoint, body, header);
    console.log(`Received put ${ endpoint }: `, data);
    return data;
  }

  /*
  patch(endpoint: string, body: any, reqOpts?: any)
  {
    return this.http.patch(endpoint, body, reqOpts);
  }*/
}
