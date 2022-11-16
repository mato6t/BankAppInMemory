import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profil } from './models/profil';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    var transactions: Transaction[] = [
      { id: 12, owner: "Panaxeo", amount: 200, category: "Work", isDebet: false, sum: 200 },
      { id: 13, owner: "Panaxeo", amount: 200, category: "Work", isDebet: false, sum: 400 },
      { id: 14, owner: "Panaxeo", amount: 200, category: "Work", isDebet: false, sum: 600 },
      { id: 15, owner: "Billa", amount: 200, category: "Groceries", isDebet: true, sum: 400 },
      { id: 16, owner: "Billa", amount: 200, category: "Groceries", isDebet: true, sum: 200 }
    ];
    var profils: Profil[] = [{id: 12, name: "Martin", surname: "Vit", address: "Moja Adresa", correspondanceAddress: "Moja korespondencna adresa", titleAfterName: "", titleBeforeName: "", imgUrl: ""}];

    return {transactions: transactions, profils: profils};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  /*genId(heroes: any[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }*/
}