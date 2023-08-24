import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masking'
})
export class MaskingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   let masked='';
    if(value!= null&& args[0]==true){
      for(let i=0 ;i< value.length ;i++){
       
        if(i%2==0){
          masked=masked+ "*";
        }
        else{
          masked=masked+value[i];
        }
      }
      return masked;
    }else{
      return value;
    }
  
  }

}
