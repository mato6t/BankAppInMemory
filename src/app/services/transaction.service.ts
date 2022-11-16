import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transUrl = 'api/transactions'
  constructor(private http: HttpClient) { }

  getTransactions():Observable<any> {
    return this.http.get<any>(this.transUrl);
  }

  getTransaction(id: number):Observable<any> {
    const url = `${this.transUrl}/${id}`;

    return this.http.get<Transaction>(url);
  }
}
