'use strict'

export default {
  register: 'Registro de Usuario',
  name: {
    name: 'Nombre Completo',
    required: 'Por favor ingrese el Nombre',
    invalid: 'Formato inválido'
  },
  email: {
    email: 'Email',
    required: 'Por favor ingrese el email',
    invalid: 'Por favor ingrese un email válido'
  },
  password: {
    password: 'Contraseña',
    confirm: 'Confirmar Contraseña',
    length: 'La Contraseña debe tener al menos tres caracteres.',
    match: 'Las Contraseñas deben coincidir.'
  },
  role: {
    role: 'Rol',
    required: 'Por favor ingrese el Rol'
  },
  success: 'Usuario creado con Exito',
  failure: 'Occurio un problema en la creación del Usuario'
}
