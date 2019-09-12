import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account-service';


@Component({
  selector: 'app-account]',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string , status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number , newStatus: string}>();
  
  constructor(private loggingservice: LoggingService, private accountservice: AccountService) {

  }

  onSetTo(status: string){
    this.accountservice. updateStatus( this.id,  status);
    this.accountservice.statusUpdated.emit(status);
    //this.loggingservice.logStatuschange(status);
    // console.log('a server satus changed , new status:' + status );
  }

 

  ngOnInit() {
  }

}
