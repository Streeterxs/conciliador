import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestQueueService {

  private requestObservableList: HttpRequest<any>[] = [];

  constructor() { }

  addNewRequestToQueue(request: HttpRequest<any>) {
    this.requestObservableList = this.requestObservableList.concat(request);
  }

  returnQueuedList(): HttpRequest<any>[] {
    return this.requestObservableList;
  }

  resetQueuedList() {
    this.requestObservableList = [];
  }
}
