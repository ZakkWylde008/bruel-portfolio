import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(value: any){
    let val = value.split('');
    let v = [];
    for(let i = 0; i < val.length; i++){
      if(val[i] != "."){
        v.push(val[i]);
      }else{
        return v.join('').toString();
      }
    }
    return v.join('').toString();
  }

}
