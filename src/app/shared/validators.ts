
import { AbstractControl } from '@angular/forms';

export class ValidationService {

    static specialCharValidator(control) {
        if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
            return null;
        } else {

            return { 'invalidCharacters': true };
        }
    }

    static uppercaseCharacterRule(amount: number): any {
        return function validate(control): { [key: string]: any } {
            const value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            const pattern = /[^A-Z]+/g;
            const stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'uppercaseCharacterRule': true };
            }
            return undefined;
        };
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        const emailLowercase = control.value.toLowerCase();
        if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static isEmptyInputValue(value: any): boolean {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }

    static emptySpacesValidator(control) {
        console.log('emptySpacesValidator', control, control.value);
        if (control.value.match(/([^\s])/)) {
            return null;
        } else {
            return { 'emptySpaces': true };
        }
    }

    static removeSpace(value: any): string {
        return value.trim()
    }

    static nameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
            return null;
        } else {
            return { 'invalidNameCharacters': true };
        }
    }

    static whiteSpaceValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value)) return null;

        if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
            return null;
        } else {
            return { 'invalidWhiteSpace': true };
        }
    }

    static usernameEmailValidator(control) {
        if (control.value == null) return;
        let validEmail = true, validPhone = true, validUsername = true;
        if (ValidationService.emailValidator(control) != null) {
            validEmail = false;
        }
        if (!control.value.match(/^[a-zA-Z0-9]{5,17}$/)) {
            validUsername = false;
        }
        if (validEmail || validUsername || validPhone) return null;
        return { 'invalidUsernameEmail': true };
    }

    static usernameValidator(control) {
        // RFC 2822 compliant regex
        if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
            return null;
        } else {
            return { 'invalidUsernameCharacters': true };
        }
    }

    static passwordValidator(control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static MatchPassword(control: AbstractControl, crud) {
        if (control.value == null) return null;
        return control.root.get('password').value != control.value ? { passworMismatch: true } : null;
    }

    static alphnumericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (ValidationService.whiteSpaceValidator(control.value)) return;
        // if (control.value.match(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,500}$/)) {
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        } else {
            return { 'invalidInputCharacters': true };
        }
    }

    static stringvalidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        } else {
            return { 'invalidInputCharacters': true };
        }
    }

    static disallowspecial(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
            return null;
        } else {
            return { 'invalidInputCharacters': true };
        }
    }

    static alphValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^\+?[A-Za-z]+$/g)) {
            return null;
        } else {
            return { 'invalidString': true };
        }
    }

    static numericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (ValidationService.whiteSpaceValidator(control.value)) return;
        const value = control.value.toString()
        if (value.match(/^\+?[0-9]+$/g)) {
            return null;
        } else {
            return { 'invalidNumeric': true };
        }
    }

}
