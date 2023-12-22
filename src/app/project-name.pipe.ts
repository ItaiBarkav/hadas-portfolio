import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectName',
  standalone: true,
})
export class ProjectNamePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'threats':
        return 'Threats';
      case 'pharm-yarok':
        return 'Pharm Yarok';
      case 'preset':
        return 'Preset';
      default:
        return '';
    }
  }
}
