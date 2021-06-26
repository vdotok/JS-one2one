
export function isEmptyObj(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function isEmptyArray(array) {
    if (!Array.isArray(array) || !array.length) {
        return true;
    } else {
        return false;
    }
}

export function isEmail(email) {
    const emailLowercase = email.toLowerCase();
    if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
        return true;
    } else {
        return false;
    }
}

export function FindObjectByValue(inputArray: Array<any>, value: string) {
    return inputArray.find(e => e == value);
}

export function FindArrayObject(inputArray, key, value) {
    return inputArray.find(e => e[key] == value);
}

export function AutoUnsubscribe(constructor) {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
        for (const prop in this) {
            if (prop) {
                const property = this[prop];
                if (property && (typeof property.unsubscribe === 'function')) {
                    property.unsubscribe();
                }
            }
        }

        if (original && typeof original === 'function') {
            original.apply(this, arguments)
        };
    };

}

export function isMobile() {
    return window.innerWidth < 768;
}