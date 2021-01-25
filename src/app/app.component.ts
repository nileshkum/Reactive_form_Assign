import { Component,OnInit } from '@angular/core';
import { FormArray,FormGroup,FormControl ,Validators} from '@angular/forms';
import { CustomValidators } from './custom-validators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  ngOnInit(){
    //Initialize te Form
    this.projectForm = new FormGroup({
        'projectName' : new FormControl(
          null,
          [Validators.required, CustomValidators.invalidProjectName],
          [CustomValidators.asyncValidator]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl('Critical')
    });

    this.projectForm.statusChanges.subscribe((value => {
      console.log("Current Status :" + value);
    }))

  }

onSubmitted() {
  console.log(this.projectForm);
}


}


