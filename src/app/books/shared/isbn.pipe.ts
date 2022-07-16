import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  /*BS*/transform(value: string): string {
    if (!value) { return ''; }
    return `${value.substring(0, 3)}-${value.substring(3)}`;
  }/*BE*/

}
