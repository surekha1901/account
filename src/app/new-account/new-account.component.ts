import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account-service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 
})
export class NewAccountComponent implements OnInit {
  // @Output() acountAdded = new EventEmitter<{name: string , status: string}>();
   constructor(private loggingservice: LoggingService, private accountsrvice: AccountService) {

   }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsrvice.addAccount(accountName, accountStatus);
    this.accountsrvice.statusUpdated.subscribe(
      (status: string)=>alert('New Status:' + status)
    );
    //this.loggingservice.logStatuschange(accountStatus);
    // this.acountAdded.emit({
    //   name: accountName,
    //   status: accountStatus

    // });
    // this.loggingservice.logStatuschange(accountStatus);
    // const service = new LoggingService();
    // service.logStatuschange(accountStatus);
    // console.log('a server satus changed , new status:' + accountStatus );
  }

  // constructor() { }

  ngOnInit() {
  }

}
