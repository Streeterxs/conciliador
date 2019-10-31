import { Component, OnInit, Input } from '@angular/core';
import { Sala } from 'src/app/shared/interfaces/sala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent implements OnInit {
  @Input() sala: Sala;

  constructor() { }

  ngOnInit() {
  }

}
