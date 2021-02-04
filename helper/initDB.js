import faker from 'faker'
import Dexie from 'dexie'
faker.locale = 'es_MX'

const initDB = async () => {
  if (typeof window !== 'undefined') {
    const examDB = new Dexie('exam')
    await examDB.version(1).stores({
      aplicantes:
        '++id, nombre, contrasena, &correoElectrionico, *examenesAprobados',
      instructores:
        '++id, nombre, contrasena, &correoElectrionico, *examenes',
      examenes:
        '++id, titulo, *preguntas, instructor, porcentajeAprobar, *aplicantesAprobados',
      preguntas: '++id, pregunta, respuesta_c, *respuestas_i'
    })
    const firstRun =
      (await examDB.aplicantes.toArray()).length +
      (await examDB.instructores.toArray()).length +
      (await examDB.examenes.toArray()).length +
      (await examDB.examenes.toArray()).preguntas
    if (firstRun < 1) {
      examDB.open()
      examDB.close()
    }
    return initDB
  }
}

export default initDB
