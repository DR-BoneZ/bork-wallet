import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  balance: string
  convertedBalance: string
  conversionSymbol: string
  conversionCurrency: string
  txs: any

  constructor(public navCtrl: NavController) {}

  async ionViewDidLoad() {
    this.balance = '1,000,000'
    this.convertedBalance = '5,000'
    this.conversionSymbol = '$'
    this.conversionCurrency = 'USD'
    this.txs = [
      {
        type: 'sent',
        amount: '5,000',
        address: 'D8j3i2fuikdjnwdmoif'
      },
      {
        type: 'sent',
        amount: '2,000',
        address: 'D8j3i2fuikdjnwdmoif'
      },
      {
        type: 'received',
        amount: '40,000',
        address: 'D8j3i2fuikdjnwdmoif'
      },
    ]
  }

  txTapped(item) {
    console.log('txTapped pushed')
  }

}
