import { Pipe, PipeTransform } from '@angular/core';
import { AES, enc } from "crypto-ts";
@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value:string): string {
    let key = "millave";
    var bytes = AES.decrypt(value, key);
    var plaintext = bytes.toString(enc.Utf8);
    return plaintext;
  }

}
