import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingService } from 'src/app/core/routing/routing.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit, OnDestroy {

  constructor(private _routingService: RoutingService) { }

  ngOnInit() {
    this._routingService.updateCurrentComponent('Salas');
  }

  ngOnDestroy(): void {
    this._routingService.updateCurrentComponent('');
  }

}
