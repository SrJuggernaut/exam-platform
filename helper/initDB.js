import faker from 'faker'

faker.locale = 'es_MX'

const initDB = async () => {
  if (typeof window !== 'undefined') {
    await indexedDB.deleteDatabase('exam')
    const openDB = indexedDB.open('exam', 1)
    openDB.onupgradeneeded = e => {
      const db = e.target.result
      const usuarios = db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true })
      usuarios.createIndex('nombre', 'nombre', { unique: false })
      usuarios.createIndex('contrasena', 'contrasena', { unique: false })
      usuarios.createIndex('correoElectrionico', 'correoElectrionico', { unique: true })
      usuarios.createIndex('tipoUsuario', 'tipoUsuario', { unique: false })
      usuarios.createIndex('examenes', 'examenes', { unique: false })
      const examenes = db.createObjectStore('examenes', { keyPath: 'id', autoIncrement: true })
      examenes.createIndex('titulo', 'titulo', { unique: true })
      examenes.createIndex('preguntas', 'preguntas', { unique: false })
      examenes.createIndex('instructor', 'instructor', { unique: false })
      examenes.createIndex('aplicantes', 'aplicantes', { unique: false })
    }
    openDB.onsuccess = e => {
      const db = e.target.result
      const usuariosTx = db.transaction('usuarios', 'readwrite')
      const usuariosStore = usuariosTx.objectStore('usuarios')
      usuariosStore.add({
        nombre: faker.name.findName(),
        contrasena: faker.internet.password(),
        correoElectrionico: faker.internet.email(),
        tipoUsuario: 'tutor',
        examenes: [1, 2]
      })
      console.log(faker.helpers.contextualCard())
      usuariosStore.add({
        nombre: faker.name.findName(),
        contrasena: faker.internet.password(),
        correoElectrionico: faker.internet.email(),
        tipoUsuario: 'aplicante',
        examenes: []
      })
      const examenesTx = db.transaction('examenes', 'readwrite')
      const examenesStore = examenesTx.objectStore('examenes')
      examenesStore.add({
        titulo: 'HTML',
        preguntas: [
          {
            pregunta: '¿Qué significa el acrónimo HTML?',
            respuesta_c: 'Hyper Text Markup Language',
            respuestas_i: [
              'Hyper Text Mask Language',
              'Hard Text Markup Language',
              'Hard Text Mask Language'
            ]
          },
          {
            pregunta: '¿Qué etiqueta es correcta para indicar un salto de línea?',
            respuesta_c: '<br />',
            respuestas_i: [
              '</br>',
              '<breakLine>',
              '<hr>'
            ]

          },
          {
            pregunta: '¿Cuál es la forma correcta de escribir un comentario en HTML?',
            respuesta_c: '<!–…–>',
            respuestas_i: [
              '/* */',
              'ctrl + Ç',
              '<¡–…–>'
            ]

          },
          {
            pregunta: '¿Cuál es la forma correcta de escribir un enlace en HTML?',
            respuesta_c: ' <a href="">…</a>',
            respuestas_i: [
              '<a src="">…</a>',
              '<a title="">…</>',
              '<link href="">…<link>'
            ]

          },
          {
            pregunta: '¿Qué etiqueta se usa para escribir una lista no ordenada?',
            respuesta_c: '<ul>',
            respuestas_i: [
              '<ol>',
              '<list>',
              '<li>'
            ]

          },
          {
            pregunta: 'Las siguientes instrucciones vienen acompañadas de un atributo. ¿Cuál es correcto?',
            respuesta_c: '<img src="foto.jpg" alt="texto">',
            respuestas_i: [
              '<img src="foto.jpg" value="texto">',
              '<img src="foto.jpg" text="texto">',
              '<img src="foto.jpg" desc="texto">'
            ]

          },
          {
            pregunta: '¿De las etiquetas a continuación cuál tiene un impacto directo sobre la página de resultados de búsqueda que ofrece Google sobre un determinado sitio web?',
            respuesta_c: '<title>',
            respuestas_i: [
              '<strong>',
              '<a href="#" rel="nofollow">anchor</a>',
              '<h1>'
            ]

          },
          {
            pregunta: '¿Cómo harías para que se abriera el enlace en la misma pestaña en la que nos encontramos?',
            respuesta_c: '<link href="#" target="_self">…</link>',
            respuestas_i: [
              '<link href="#" target="_blank">…</link>',
              '<a href="#" target="_blank">…</a>',
              '<a href="#" target="_self">…</a>'
            ]

          },
          {
            pregunta: '¿Qué etiqueta está deprecated en html5?',
            respuesta_c: '<center>',
            respuestas_i: [
              '<b>',
              '<u>',
              '<i>'
            ]

          },
          {
            pregunta: '¿Qué versión de html soporta la etiqueta <video>?',
            respuesta_c: 'HTML5',
            respuestas_i: [
              'De HTML 3.2 en adelante',
              'HTML4',
              'Todas las versiones de HTML'
            ]

          }
        ],
        instructor: 1,
        aplicantes: {}
      })
      examenesStore.add({
        titulo: 'CSS',
        preguntas: [
          {
            pregunta: '¿Cuál es la forma más eficiente de aplicar estilos CSS en un documento HTML?',
            respuesta_c: 'Hojas de estilo externas',
            respuestas_i: [
              'En línea',
              'Incrustado en la cabecera',
              'Mediante PHP'
            ]
          },
          {
            pregunta: '¿Cuáles de las siguientes declaraciones son propiedades o atributos?',
            respuesta_c: 'background-color',
            respuestas_i: [
              'italic',
              'span',
              'h1'
            ]
          },
          {
            pregunta: '¿Cuáles de las siguientes declaraciones son selectores?',
            respuesta_c: 'p',
            respuestas_i: [
              'font-family',
              '50px',
              'red'
            ]
          },
          {
            pregunta: '¿Cómo se define un color de fondo para todas las etiquetas "p" en CSS?',
            respuesta_c: 'p {background-color:red;}',
            respuestas_i: [
              'p.all {background-color:red;}',
              '#p {background-color:red;}',
              '.p {background-color:red;}'
            ]
          },
          {
            pregunta: '¿Con qué propiedad se define el espacio entre el borde de un elemento y los elementos que lo rodean?',
            respuesta_c: 'margin',
            respuestas_i: [
              'border',
              'padding',
              'Ninguna respuesta es correcta'
            ]
          },
          {
            pregunta: '¿Qué propiedad se emplea para cambiar el tipo de letra de un elemento?',
            respuesta_c: 'font-family',
            respuestas_i: [
              'text-family',
              'font-type',
              'text-type'
            ]
          },
          {
            pregunta: '¿Cómo se cambia el valor del margen derecho de un elemento?',
            respuesta_c: 'margin-right ',
            respuestas_i: [
              'text-right',
              'right-magin',
              'marginright '
            ]
          },
          {
            pregunta: '¿Qué significa CSS?',
            respuesta_c: 'Cascading Style Sheets ',
            respuestas_i: [
              'Center Style Steels',
              'Calibre Style Sheet',
              'Ninguna respuesta es correcta'
            ]
          },
          {
            pregunta: '¿Cómo se indica que el color del texto es de color rojo?',
            respuesta_c: 'Todas las respuestas son correctas',
            respuestas_i: [
              'color: RGB(255, 0, 0)',
              'color: #FF0000',
              'color: red'
            ]
          },
          {
            pregunta: '¿Cómo se indica que todos los elementos "span" tienen el texto en negrita?',
            respuesta_c: 'span {font-weight:bold}',
            respuestas_i: [
              'span {text-weight:bold}',
              'span {font-style:bold}',
              'span {font-style:bold}'
            ]
          }
        ],
        instructor: 1,
        aplicantes: {
          2: '70%'
        }
      })
    }
  }
}

export default initDB
