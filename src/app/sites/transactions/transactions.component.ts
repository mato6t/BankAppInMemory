import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = []
  constructor(
    private transService: TransactionService) { }

  ngOnInit(): void {
    this.transService.getTransactions().subscribe((transactions) => {this.transactions = transactions});
  }

}
