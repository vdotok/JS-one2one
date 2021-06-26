import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
    selector: 'form-errors',
    template: `
    <p class='text-danger'>
     {{hasErrors() ? listOfErrors() : ''}}
    </p>`,
})
export class GetErrorsComponent {

    private static readonly errorMessages = {
        'required': () => 'The specified information is required.',
        'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
        'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
        'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
        'years': (params) => params.message,
        'countryCity': (params) => params.message,
        'uniqueName': (params) => params.message,
        'telephoneNumbers': (params) => params.message,
        'telephoneNumber': (params) => params.message,
        'invalidNumber': () => 'The specified information is invalid.',
        'emptySpaces': () => 'The specified information is invalid.',
        'email': () => 'Email is not valid',
        'invalidPassword': () => 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value',
        'invalidUsernameCharacters': () => 'invalid user name',
        'invalidInputCharacters': () => 'The specified information is invalid.',
        'invalidEmailAddress': () => 'Email is not valid',
        'invalidUsernameEmail': () => 'The specified information is invalid.',
    };

    @Input() private control: AbstractControlDirective | AbstractControl;

    hasErrors(): boolean {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    }

    listOfErrors() {
        const errors = Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
        return errors.length ? errors[0] : errors;
    }

    private getMessage(type: string, params: any) {
        return GetErrorsComponent.errorMessages[type](params);
    }

}