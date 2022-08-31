import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tirmtext'
})
export class TirmtextPipe implements PipeTransform {

  transform(value: string, limit:number): string {
    return  value.split(' ' , limit).join(' ')
  }

}
