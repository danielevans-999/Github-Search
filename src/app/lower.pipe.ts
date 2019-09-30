import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return value.toLowerCase();
    
    return null;
  }

}
