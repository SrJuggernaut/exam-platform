import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/BasicLayout'
import { Formik, Form, Field } from 'formik'

import appContex from '../../context/app/appContext'

const ExamTitle = styled.h1`
  text-align: center;
`
const PreguntaWrapper = styled.div`
  margin-top: var(--spacer);
  margin-bottom: var(--spacer);
`
const StyledForm = styled(Form)`
  padding: var(--spacer);
`
const Pregunta = styled.p`
  margin-top: var(--spacer);
  margin-bottom: var(--spacer);
`
const Label = styled.label`
  display: block;
`

function Exam (props) {
  const router = useRouter()
  const { db } = useContext(appContex)
  const { id } = router.query
  const [exam, setExam] = useState({})
  const getData = async () => {
    if (id && typeof window !== 'undefined') {
      const getExam = await db.examenes.where({ id: parseInt(id) }).first()
      const preguntas = await db.preguntas
        .where('id')
        .anyOf(getExam.preguntas)
        .toArray()
      getExam.preguntas = preguntas.map((pregunta) => {
        return {
          id: pregunta.id,
          pregunta: pregunta.pregunta,
          respuestas: [...pregunta.respuestas_i, pregunta.respuesta_c]
        }
      })
      setExam(getExam)
      console.log(getExam)
    }
  }
  useEffect(() => {
    getData()
  }, [id])
  return (
    <Layout>
      <ExamTitle>{exam.titulo}</ExamTitle>
      <Formik
        initialValues={{}}
        onSubmit={
          (e) => {
            console.log(e)
          }
        }
      >
        {Object.entries(exam).length !== 0
          ? ({ errors, touched }) => (
              <StyledForm>
                {exam.preguntas.map(({ id, pregunta, respuestas }, pregindex) => (
                  <PreguntaWrapper key={`p-${id}`}>
                    <Pregunta>{pregunta}</Pregunta>
                    {respuestas.map((respuesta, resindex) => (
                      <Label key={`p-${pregindex}-r${resindex}`}>
                        <Field type="radio" name={`p-${pregindex}`} value={respuesta} />
                        {respuesta}
                      </Label>
                    ))}
                  </PreguntaWrapper>
                ))}
                <button type="submit">Enviar</button>
              </StyledForm>
            )
          : null}
      </Formik>
    </Layout>
  )
}

export default Exam
