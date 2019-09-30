import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecount'
})
export class TimecountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
