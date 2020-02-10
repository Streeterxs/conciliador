import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-desc-filter',
  templateUrl: './desc-filter.component.html',
  styleUrls: ['./desc-filter.component.scss']
})
export class DescFilterComponent implements OnInit {
  descFilterForm: FormGroup;

  @Output() formChange: EventEmitter<string> = new EventEmitter();
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.descFilterForm = this.gerarDescFiltroForm();
    this.descFilterForm.valueChanges
    .pipe(debounceTime(500), distinctUntilChanged((prev, curr) => prev.descricao === curr.descricao))
    .subscribe(value => {
      if (value) {
        this.formChange.emit(value);
      }
    });
  }

  gerarDescFiltroForm(): FormGroup {
    return this._formBuilder.group({
      descricao: ['']
    });
  }

}
