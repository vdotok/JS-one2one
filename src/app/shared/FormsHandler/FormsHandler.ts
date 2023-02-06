import { UntypedFormGroup } from "@angular/forms";

export default class FormsHandler {

    /**
     * This method is use to validate Form
     * @param form  FormGroup instance | object
     * @return errors as string
     * @author  Mukhtiar <muhammad.mukhtiar@norgic.com>
     **/
    static validateForm(form: UntypedFormGroup) {
        if (form.valid) {
            return true;
        } else {
            if (form.controls) {
                for (const field in form.controls) {
                    const control = form.get(field);
                    if (control.invalid) {
                        control.markAsTouched({ onlySelf: true });
                    }
                }
            }
            return false;
        }
    }

}