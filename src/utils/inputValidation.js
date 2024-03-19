export const nombreValidation = {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    id: 'nombre',
    placeholder: 'Introduce tu nombre',
    validation: {
        required: {
            value: true,
            message: 'Obligatorio'
        },
        maxLength: {
            value: 3,
            message: 'Minimo 3 caracteres'
        }
    }
}

export const apellidosValidation = {
    name: 'apellidos',
    label: 'Apellidos',
    type: 'text',
    id: 'apellidos',
    placeholder: 'Introduce tus apellidos',
    validation: {
        required: {
            value: true,
            message: 'Obligatorio'
        },
        maxLength: {
            value: 4,
            message: 'Minimo 4 caracteres'
        }
    }
}

export const emailValidation = {
    name: 'email',
    label: 'Correo electronico',
    type: 'email',
    id: 'email',
    placeholder: 'Introduce tu dirección de correo electronico',
    validation: {
        required: {
            value: true,
            message: 'Formato invalido'
        }
    }
}

export const passwordValidation = {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'contraseña',
    validation: {
        required: {
            value: true,
            message: 'Obligatorio'
        },
        maxLength: {
            value: 6,
            message: 'Minimo 6 caracteres'
        }
    }
}

export const telefonoValidation = {
    name: 'telefono',
    label: 'Télefono',
    type: 'phone',
    id: 'telefono',
    placeholder: 'Introduce tu telefono',
    validation: {
        maxLength: {
            value: 9,
            message: 'Solo acepta números'
        }
    }
}