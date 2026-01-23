"use strict"

export class ValidationManager {

    static usuarioExistente(input, form) {
        input.setCustomValidity("El usuario ya existe");
        form.reportValidity();
    }

    static usuarioInexistente(input,form) {
        input.setCustomValidity("El usuario no existe o los datos son incorrectos");
        form.reportValidity();
    }

    static mostrarError(input, form) {
        const v = input.validity;

        if (v.valueMissing) {
            input.setCustomValidity("Este campo es obligatorio");
        } else if (v.tooShort) {
            input.setCustomValidity(`Debe tener al menos ${input.minLength} caracteres`);
        } else if (v.tooLong) {
            input.setCustomValidity(`Debe tener como máximo ${input.maxLength} caracteres`);
        } else if (v.patternMismatch) {
            input.setCustomValidity("El formato no es válido");
        } else if (v.typeMismatch) {
            input.setCustomValidity("El tipo de dato no es válido");
        } else if (v.rangeOverflow) {
            input.setCustomValidity(`El valor no puede superar ${input.max}`);
        } else if (v.rangeUnderflow) {
            input.setCustomValidity(`El valor no puede ser menor que ${input.min}`);
        }

        if (!input.validity.valid) {
            form.reportValidity();
        }else{
            this.limpiarValidez(input);
        }
    }

    static limpiarValidez(input) {
        input.setCustomValidity("");
    }

}