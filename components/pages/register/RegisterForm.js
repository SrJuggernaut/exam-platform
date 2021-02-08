import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

import authContext from '../../../context/auth/authContext'

import Button from '../../../components/ui/Button'
import Alert from '../../ui/Alert'

const InputContainer = styled.div`
  margin: var(--spacer);
  label {
    display: block;
    margin-bottom: calc(var(--spacer) * 0.5);
  }
`
const RegisterInput = styled(Field)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-light);
  border-radius: calc(var(--spacer) / 2);
  padding: calc(var(--spacer) / 2);
  font-size: 1rem;
`
const registerSchema = yup.object().shape({
  nombre: yup
    .string()
    .min(2, 'Nombre demasiado corto!')
    .required('El nombre es obligatorio'),
  tipoUsuario: yup.string().required('El tipo de usuario es requerido'),
  correoElectrionico: yup
    .string()
    .email('Inserta un correo electronico valido')
    .required('El correo electronico es obligatorio'),
  contrasena: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  repContrasena: yup
    .string()
    .oneOf([yup.ref('contrasena'), null], 'Las contraseñas deben ser iguales')
})
function RegisterForm (props) {
  const auth = useContext(authContext)
  const { registrarUsuario } = auth
  const handleSubmit = (e) => {
    registrarUsuario(e)
  }
  return (
    <Formik
      initialValues={{
        nombre: '',
        correoElectrionico: '',
        contrasena: '',
        repContrasena: ''
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <InputContainer>
            <label htmlFor="nombre">Nombre</label>
            {errors.nombre && touched.nombre
              ? (
              <Alert>{errors.nombre}</Alert>
                )
              : null}
            <RegisterInput
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="correoElectrionico">Correo electrionico</label>
            {errors.correoElectrionico && touched.correoElectrionico
              ? (
              <Alert>{errors.correoElectrionico}</Alert>
                )
              : null}
            <RegisterInput
              type="email"
              name="correoElectrionico"
              id="correoElectrionico"
              placeholder="tu@correoelectronico.com"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="tipoUsuario">Soy un:</label>
            {errors.tipoUsuario && touched.tipoUsuario
              ? (
              <Alert>{errors.tipoUsuario}</Alert>
                )
              : null}
            <RegisterInput
              as="select"
              name="tipoUsuario"
              id="tipoUsuario"
              placeholder="tu@correoelectronico.com"
            >
              <option value="" defaultValue>
                Seleccionar
              </option>
              <option value="instructor">Instructor</option>
              <option value="aplicante">Aplicante</option>
            </RegisterInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="contrasena">Contraseña</label>
            {errors.contrasena && touched.contrasena
              ? (
              <Alert>{errors.contrasena}</Alert>
                )
              : null}
            <RegisterInput
              type="password"
              name="contrasena"
              id="contrasena"
              placeholder="Contraseña"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="repContrasena">Repetir contraseña</label>
            {errors.repContrasena && touched.repContrasena
              ? (
              <Alert>{errors.repContrasena}</Alert>
                )
              : null}
            <RegisterInput
              type="password"
              name="repContrasena"
              id="repContrasena"
              placeholder="Contraseña"
            />
          </InputContainer>
          <InputContainer>
            <Button type="submit" block={true} color="contrast">
              Enviar
            </Button>
          </InputContainer>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
