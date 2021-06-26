import { Pipe, PipeTransform } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  constructor(
    private toastr: ToastrService,
    private svc: BaseService
  ) {
  }

  transform(items: any[], value: string): Observable<any> {
    if (!items) return of([]);
    if (!value) return of(items);
    const data = {
      "search_field": "full_name",
      "search_value": value,
      "condition": "contains",
    }
    return this.svc.post('AllUsers', data).pipe(
      debounceTime(500),
      map(res => {
        if (res.status == 400) {
          this.toastr.error("No contacts found", "Opps!");
          return [];
        }
        return res.users;
      })
    )
  }
}