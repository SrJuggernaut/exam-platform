import faker from 'faker'
import Dexie from 'dexie'
faker.locale = 'es_MX'

const examDB = new Dexie('exam')
examDB.version(1).stores({
  aplicantes:
    '++id, nombre, contrasena, &correoElectrionico, *examenesAprobados',
  instructores:
    '++id, nombre, contrasena, &correoElectrionico, *examenes',
  examenes:
    '++id, titulo, *preguntas, instructor, porcentajeAprobar, *aplicantesAprobados',
  preguntas: '++id, pregunta, respuesta_c, *respuestas_i'
})

export default examDB
