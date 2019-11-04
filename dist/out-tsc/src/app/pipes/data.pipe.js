import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { AES, enc } from "crypto-ts";
let DataPipe = class DataPipe {
    transform(value) {
        let key = "millave";
        var bytes = AES.decrypt(value, key);
        var plaintext = bytes.toString(enc.Utf8);
        return plaintext;
    }
};
DataPipe = tslib_1.__decorate([
    Pipe({
        name: 'data'
    })
], DataPipe);
export { DataPipe };
//# sourceMappingURL=data.pipe.js.map