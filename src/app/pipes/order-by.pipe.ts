import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, fieldObj?: any, orderObj?: any): any {
    let field=fieldObj.value;
    let order=orderObj.value;
    value.sort((a:any, b:any)=>{
      if(a[field].toLowerCase()<b[field].toLowerCase()){
        return -1*order;
      }
      if(a[field].toLowerCase()>b[field].toLowerCase()){
        return 1*order;
      }else
      {
        return 0;
      }

    });
    return value;
  }

}
