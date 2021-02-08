import React, { useContext } from 'react'
import faker from 'faker/locale/es_MX'
import Head from 'next/head'

import appContext from '../../context/app/appContext'
import BasicLayout from '../../components/layout/BasicLayout'
import Button from '../../components/ui/Button'
import defaultExamCssPreg from '../../helper/defaults/defaultExamCssPreg'
import defaultExamCss from '../../helper/defaults/defaultExamCss'
import defaultExamHtmlPreg from '../../helper/defaults/defaultExamHtmlPreg'
import defaultExamHtml from '../../helper/defaults/defaultExamHtml'

function index (props) {
  const { db } = useContext(appContext)
  const handleAgregarUsuarios = async () => {
    try {
      // Agrega las preguntas de CSS
      const cssPregId = await db.preguntas.bulkAdd(defaultExamCssPreg, {
        allKeys: true
      })
      defaultExamCss.preguntas = cssPregId
      // Agrega el examen de CSS
      const examCssId = await db.examenes.add(defaultExamCss)
      // Agrega las preguntas de HTML
      const htmlPregId = await db.preguntas.bulkAdd(defaultExamHtmlPreg, {
        allKeys: true
      })
      defaultExamHtml.preguntas = htmlPregId
      // Agrega el examen de HTML
      const examHtmlId = await db.examenes.add(defaultExamHtml)
      // Genera los datos del instructor
      const instructor = faker.helpers.contextualCard()
      // Agrega el instructor
      await db.instructores.add({
        nombre: instructor.name,
        contrasena: faker.internet.password(),
        correoElectrionico: instructor.email.toLowerCase(),
        examenes: [examCssId, examHtmlId]
      })
      // Genera los datos del aplicante
      const aplicante = faker.helpers.contextualCard()
      // Agrega el aplicante
      await db.aplicantes.add({
        nombre: aplicante.name,
        contrasena: faker.internet.password(),
        correoElectrionico: aplicante.email.toLowerCase(),
        examenesAprobados: []
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Head>
        <title>Panel - Exam</title>
      </Head>
      <BasicLayout>
        <h1>Panel de control</h1>
        <p>Este panel de control puede ser utilizado para crear usuarios</p>
        <h2>Informacion predeterminada</h2>
        <Button color="contrast" onClick={handleAgregarUsuarios}>
          Agregar usuarios
        </Button>
      </BasicLayout>
    </>
  )
}

export default index
