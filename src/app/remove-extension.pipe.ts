import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(value: any){
    let val = value.split('');
    let v = [];
    let sortie = "";
    for(let i = 0; i < val.length; i++){
      if(val[i] != "."){
        v.push(val[i]);
      }else{
        sortie = v.join('').toString();
        return sortie;
      }
    }
    sortie = v.join('').toString();
    return sortie;
  }

}
