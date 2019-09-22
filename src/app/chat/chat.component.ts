import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { 
    console.log(this._activatedRoute.snapshot.params)
  }

  ngOnInit() {
  }

}
