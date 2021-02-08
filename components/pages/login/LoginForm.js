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
const LoginInput = styled(Field)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-light);
  border-radius: calc(var(--spacer) / 2);
  padding: calc(var(--spacer) / 2);
  font-size: 1rem;
`
const LoginSchema = yup.object().shape({
  correoElectrionico: yup
    .string()
    .email('Inserta un email valido')
    .required('El email es obligatorio'),
  contrasena: yup
    .string()
    .required('La contraseña es obligatoria')
})
function RegisterForm (props) {
  const { iniciarSesion, alerta } = useContext(authContext)
  const handleSubmit = (credenciales) => {
    iniciarSesion(credenciales)
  }
  return (
    <Formik
      initialValues={{
        correoElectrionico: '',
        contrasena: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {alerta ? <Alert>{alerta}</Alert> : null }
          <InputContainer>
            <label htmlFor="correoElectrionico">Correo electrionico</label>
            {errors.correoElectrionico && touched.correoElectrionico ? <Alert>{errors.correoElectrionico}</Alert> : null}
            <LoginInput
              type="email"
              name="correoElectrionico"
              id="correoElectrionico"
              placeholder="tu@correoelectronico.com"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="contrasena">Contraseña</label>
            {errors.contrasena && touched.contrasena ? <Alert>{errors.contrasena}</Alert> : null}
            <LoginInput
              type="password"
              name="contrasena"
              id="contrasena"
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
