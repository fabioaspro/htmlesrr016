import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, map, of, take, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { PoLookupFilteredItemsParams, PoLookupResponseApi, PoTableColumn } from '@po-ui/ng-components';
import { environment } from '../environments/environment'
import { PoLookupFilter } from '@po-ui/ng-components'

//--- Header somente para DEV
const headersTotvs = new HttpHeaders(environment.totvs_header)

@Injectable({
  providedIn: 'root'
})
export class TecLabLookupService implements PoLookupFilter {
  constructor(private http: HttpClient) { }

  _url = environment.totvs_url;
  
  getFilteredData(filter: string, page: number, pageSize: number): Observable<any> {
    
    
    const url = this._url + `/ObterTecLab?filter=${filter}&page=1&pageSize=20`
    return this.http.get(url, { headers: headersTotvs  }).pipe(take(1))
  }

  getFilteredItems(params: PoLookupFilteredItemsParams): Observable<any> {
    const {filter, page, pageSize} = params
    const headers = new HttpHeaders({
      'Authorization': 'Basic c3VwZXI6cHJvZGlYm9sZDE=',
      'CompanyId': '1'
    });
    const params1 = ""
    
    //const url = this._url + `/ObterTecLab?filter=${filter}&page=${page}&pageSize=${pageSize}`
    const url = this._url + `/ObterTecLab?filter=${filter}&page=1&pageSize=20`
    return this.http.get(url, {headers: headersTotvs }).pipe(take(1))

    /*public EfetivarArquivo(params?: any){
        return this.http.post(`${this._url}/EfetivarArquivo`, params, {headers:headersTotvs}).pipe(take(1))
      }
      
      //---------------------- Obter Lista Completa
      public ObterArquivo(params?: any){
        return this.http.get(`${this._url}/ObterArquivo`, {params:params, headers:headersTotvs}).pipe(take(1));
      }
*/
  }
  getObjectByValue(value: string): Observable<any> {    

    const url = this._url + `/ObterTecLab/${value}`;
    return this.http.get(url, { headers: headersTotvs }).pipe(take(1))
  }
}