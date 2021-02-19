import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
 allowNewServer =false;
 serverCreationStatus ='No server is created!';
 serverName ='Testserver';
 serverCreated=false;
 servers = ['test' ,'test 2'];
  constructor() {
    setTimeout(() =>{
     this.allowNewServer=true;
    },2000)
   }
    
  ngOnInit(): void {
  }

  onUpdateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server is created and server name is' + this.serverName;
  }
  onUpdateServerName(event: Event){
  this.serverName=(<HTMLInputElement>event.target).value;
  }

}
