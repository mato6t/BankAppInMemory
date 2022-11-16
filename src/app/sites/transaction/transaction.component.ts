import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  id: number = 0;
  idecko: string | null = null;
  transaction: Transaction = {
    id: 0,
    amount: 0,
    sum: 0,
    category: "",
    owner: "",
    isDebet: false
  };

  constructor(
    private activatedRout: ActivatedRoute,
    private transService: TransactionService
    ) { }

  ngOnInit(): void {
    this.idecko = this.activatedRout.snapshot.paramMap.get('id');
    if (this.idecko != null){
      this.id = Number.parseFloat(this.idecko);
    }
    this.transService.getTransaction(this.id).subscribe((trans) => {
      this.transaction = trans;
    })
  }

}
