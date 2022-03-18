import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArticuloFamilia } from '../interfaces/ArticuloFamilia';
import { Familia } from '../interfaces/Familia';
import { Articulo } from '../interfaces/Articulo';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  constructor(private http:HttpClient) { }
  private _urlBasica:string = environment.url;

  //  headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  //   'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
  // });

   getListaArticulosPorFamilia(idFamilia:number) : Observable<ArticuloFamilia[]>{
    const url = `${this._urlBasica}/item/list/${idFamilia}`;
    console.log("la url es",url);

    return this.http.get<ArticuloFamilia[]>(url)
                .pipe(
                  map((el:ArticuloFamilia[])=>  el as ArticuloFamilia[])
                )
  }

   getFamiliasArticulos():Observable<Familia[]>{

    const url = `${this._urlBasica}/family/list`;
    console.log("la url es",url);
    return this.http.get<Familia[]>(url)
                .pipe(
                  map((el:Familia[])=>  el )
                
                )

   }

  

   getArticuloPorId(idArticulo:number): Observable<Articulo>{
    const url = `${this._urlBasica}/item/${idArticulo}`;
    console.log("la url es",url);

    return this.http.get<Articulo>(url)
                .pipe(
                  map((el:Articulo)=>  el)
                )
  }


}
