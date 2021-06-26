import { FormGroup } from "@angular/forms";

export default class FormsHandler {

    /**
     * This method is use to validate Form
     * @param formErrors string 
     * @param form  form instance | object
     * @return errors as string
     * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
     **/
    static validateForm(form) {
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

    /**
    * this method is use to validate Form Array
    * @param formErrors string 
    * @param form  form instance | object
    * @return errors as string
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    static validateFormArray(form) {
        if (form.valid) {
            return true;
        } else {
            if (form.controls) {
                for (const group in form.controls) {
                    const groupFiled = form.get(group) as FormGroup;
                    for (const field in groupFiled.controls) {
                        const control = groupFiled.get(field);
                        if (control.invalid) {
                            control.markAsTouched({ onlySelf: true });
                        }
                    }
                }
            }
            return false;
        }
    }

    static deleteEmptyFileds(data) {
        if (data) {
            for (const key in data) {
                if (data[key] == '' || data[key] == null) {
                    delete data[key];
                }
                if (data[key] && typeof data[key] === 'string') {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }

}