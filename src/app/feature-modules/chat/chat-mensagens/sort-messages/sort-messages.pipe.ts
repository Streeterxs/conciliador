import { Pipe, PipeTransform } from '@angular/core';

import { Mensagem } from 'src/app/shared/interfaces/mensagem';

@Pipe({
  name: 'sortMessages'
})
export class SortMessagesPipe implements PipeTransform {

  transform(mensagens: Mensagem[]): any {
    if (mensagens) {
      return mensagens.sort((a, b) => {
        return +new Date(a.data) - +new Date(b.data);
      });
    } else {
      return null;
    }
  }

}
