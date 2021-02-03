import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, args: string): unknown {
    return value.length > Number.parseInt(args)
      ? value.slice(0, Number.parseInt(args)) + '...'
      : value;
  }
}
