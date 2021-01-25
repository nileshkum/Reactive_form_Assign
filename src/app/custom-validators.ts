import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomValidators {
inavlidProjectName = 'Test';

  static invalidProjectName(control: FormControl) : { [s: string]: boolean} {
    if(control.value === 'Test'){
      return { 'invalidProjectName' : true};
    }
    return null;
  }

  static asyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve ({'Project name is Ivalid': true})
        } else {
          resolve(null);
        }
      },1500);
    });
    return promise;
  }

}
