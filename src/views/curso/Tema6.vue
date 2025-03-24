<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'6. Herramientas y técnicas para el seguimiento y evaluación y reportes'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      p.mb-4 Para el seguimiento y evaluación, así como para la elaboración de reportes, es fundamental contar con herramientas y técnicas adecuadas. A continuación, se estudian algunas de las más utilizadas.



      #t_6_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 6.1] Herramientas y técnicas para el seguimiento, evaluación y elaboración de reportes


      p Las herramientas de seguimiento son:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/slide-1.png" alt="Indicadores de Desempeño KPIs")
              .col-lg-7.order-lg-1
                h4 Indicadores de Desempeño (KPIs)
                p Son métricas cuantificables que permiten evaluar el progreso de un proyecto en relación con los objetivos establecidos. Se pueden clasificar en indicadores de eficiencia, eficacia, calidad, impacto y productividad. Su análisis facilita la toma de decisiones y la implementación de estrategias correctivas en tiempo real.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/slide-2.png" alt="Cuadro de Mando Integral")
              .col-lg-7.order-lg-1
                h4 Cuadro de Mando Integral (Balanced Scorecard)
                p Es un sistema de gestión que traduce la visión y estrategia de una organización en objetivos medibles desde cuatro perspectivas: financiera, clientes, procesos internos y aprendizaje/crecimiento. Ayuda a alinear iniciativas, asignar recursos de manera eficiente y evaluar el desempeño organizacional con base en indicadores clave.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/slide-3.png" alt="Gráficos de Gantt")
              .col-lg-7.order-lg-1
                h4 Gráficos de Gantt
                p Son diagramas de barras horizontales que muestran la planificación y el progreso de un proyecto a lo largo del tiempo. Facilitan la visualización de actividades, dependencias y plazos, permitiendo identificar retrasos y reasignar recursos. Son útiles para el seguimiento de proyectos complejos con múltiples tareas y participantes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/slide-4.png" alt="Software de Gestión de Proyectos")
              .col-lg-7.order-lg-1
                h4 Software de Gestión de Proyectos (Trello, Asana, MS Project, Jira)
                p Estas plataformas digitales permiten planificar, asignar tareas, dar seguimiento al progreso y colaborar en equipo. Incluyen funciones como tableros visuales, cronogramas interactivos, reportes de desempeño y automatización de procesos, lo que optimiza la productividad y la gestión eficiente de los proyectos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/slide-5.png" alt="Reuniones de seguimiento")
              .col-lg-7.order-lg-1
                h4 Reuniones de seguimiento
                p Son encuentros programados periódicamente, para revisar avances, resolver problemas y ajustar estrategias. Fomentan la comunicación entre los miembros del equipo y permiten detectar desviaciones en la ejecución del proyecto. Su efectividad depende de la claridad en los objetivos, la participación activa y el registro de compromisos y acciones.
      
      #t_6_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 6.2] Técnicas de evaluación

      p Las técnicas de evaluación son:


      .row.align-items-start.mb-5#aco-1
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Análisis DAFO (SWOT)")
              p El análisis DAFO es una técnica estratégica que ayuda a las organizaciones a identificar sus Debilidades, Amenazas, Fortalezas y Oportunidades, en un entorno competitivo. A través de este enfoque, se pueden visualizar y segmentar los factores internos y externos que afectan a la organización. Esta información permite la formulación de estrategias que maximicen los recursos y minimicen los riesgos, contribuyendo así a la mejora continua del proceso y a la toma de decisiones informadas.

            .div(titulo="Evaluación por indicadores")
              p La evaluación por indicadores, implica establecer métricas específicas que midan el desempeño de un proceso en relación con los objetivos organizacionales. Estos indicadores pueden ser cualitativos y cuantitativos. Se utilizan para evaluar aspectos como eficiencia, eficacia y satisfacción del cliente. Al monitorear estos indicadores, las organizaciones pueden identificar áreas que requieren ajustes, permitiendo una respuesta oportuna a los problemas y asegurando un enfoque alineado con los objetivos estratégicos.

            .div(titulo="Auditorías internas")
              p Las auditorías internas son revisiones sistemáticas y objetivas de los procesos y controles de la organización. Su objetivo es asegurar que se cumplan políticas, procedimientos, estándares y regulaciones internas y externas. Las auditorías ayudan a identificar deficiencias y áreas de mejora, ofreciendo recomendaciones para optimizar los procesos. Además, fomentan una cultura de cumplimiento y mejora continua, lo que a su vez contribuye al desarrollo organizacional.

            .div(titulo="Encuestas y cuestionarios")
              p Las encuestas y cuestionarios son herramientas valiosas para recoger la opinión de empleados, clientes y otras partes interesadas sobre la efectividad de los procesos organizacionales. Permiten obtener datos cuantificables sobre la satisfacción y experiencias de los encuestados. Estos instrumentos, si se diseñan adecuadamente, ofrecen información clara que puede ser analizada para identificar oportunidades de mejora y áreas específicas que necesitan atención, facilitando una comprensión más profunda de los problemas.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema6/1.png", alt="Imagen técnicas de evaluación").mb-4.mb-lg-0
      

      .row.align-items-start.mb-5#aco-2
        .col-lg-4
          figure
            img(src="@/assets/curso/tema6/2.png", alt="Imagen de técnicas de evaluación adicionales").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Benchmarking")
              p El benchmarking consiste en comparar los procesos, productos o servicios de una organización con los de las mejores en su sector. Esta técnica permite identificar prácticas óptimas y estándares de desempeño que pueden ser adoptados. Con el análisis de estas comparaciones, las organizaciones pueden establecer metas más ambiciosas, aprender de otros y encontrar maneras innovadoras de mejorar sus propios procesos, lo que puede llevar a un aumento en la competitividad y eficiencia.

            .div(titulo="Análisis de flujo de procesos")
              p El análisis de flujo de procesos se centra en visualizar y documentar cada etapa de un proceso organizacional mediante diagramas de flujo. Este enfoque permite identificar claramente cuellos de botella, redundancias y actividades innecesarias. Al desglosar el proceso en sus componentes fundamentales, las organizaciones pueden llevar a cabo mejoras específicas que optimicen el rendimiento. Este método es útil para promover la eficiencia, claridad y efectividad en la organización de tareas.

            .div(titulo="Reuniones de retroalimentación")
              p Las reuniones de retroalimentación, son encuentros periódicos donde los miembros del equipo discuten el progreso, los desafíos y las oportunidades de mejora en los procesos organizacionales. Estas reuniones fomentan un ambiente colaborativo, permitiendo que los integrantes compartan sus experiencias y sugerencias. Al proporcionar un espacio abierto para la comunicación, se puede construir una cultura de transparencia y mejora continua, lo que a su vez impulsa el compromiso del equipo hacia los objetivos organizacionales.

            .div(titulo="Evaluación por pares")
              p La evaluación por pares, o revisión entre colegas, implica que los equipos o departamentos evalúen el desempeño de sus pares. Este proceso facilita la identificación de fortalezas y debilidades desde una perspectiva diferente, enriqueciendo el entendimiento del proceso evaluado. Además, fomenta la colaboración y el aprendizaje entre compañeros. Al recibir retroalimentación constructiva, se pueden implementar mejoras efectivas, aumentando la calidad y eficiencia general de los procesos organizacionales.

      #t_6_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 6.3] Herramientas de reporte

      p El uso de herramientas de reporte es fundamental para el seguimiento y análisis del desempeño organizacional, permitiendo la toma de decisiones informadas y la optimización de procesos.

      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Herramientas de reporte 
              p.mb-4(data-aos="fade-right") En el PDF Herramientas de reporte, se presentan diversas plataformas utilizadas para generar informes y visualizar datos, como Microsoft Excel, Google Sheets, Power BI y Tableau, entre otras. Estas herramientas facilitan la gestión de información, mejoran la colaboración entre equipos y garantizan un monitoreo eficiente del progreso de proyectos y actividades dentro de una organización.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Herramientas de reporte 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/3.png', alt='')
      
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/PA2_OaW4cFA?si=QBWfPu0MXGG5QEKJ" target="_blank" rel="noopener noreferrer") San José Fundación de Educación Superior (2019, 4 de abril) JUAN CARLOS FERNÁNDEZ MATERIA SEGUIMIENTO PROCESOS INTERNOS TEMA FUNDAMENTOS DEL CONTROL INTERNO.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/pdf/6722/672271520006.pdf" target="_blank" rel="noopener noreferrer") Montes, J. O., Salazar-Acosta, M., & Ruiz-Ramos, C. F. (2015). Metodología para el seguimiento y evaluación de los Planes Estratégicos Departamentales de Ciencia, Tecnología e Innovación, PEDCTI: Una propuesta desde el ciclo PHVA.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo de la evaluación del desempeño de los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Medir el cumplimiento de los procedimientos establecidos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Identificar las áreas de mejora y optimizar la eficiencia.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Reducir la cantidad de tareas realizadas en cada proceso.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Reemplazar los procesos antiguos por nuevas metodologías.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué herramienta se utiliza comúnmente para evaluar el desempeño de los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis FODA.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Indicadores clave de desempeño (KPIs).',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Encuestas de satisfacción del cliente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mapas de procesos internos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué factor es crucial para una evaluación efectiva del desempeño de los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La claridad en los objetivos y métricas a medir.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La concentración exclusiva en la reducción de costos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La minimización de la colaboración entre departamentos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El enfoque en los aspectos subjetivos de la gestión.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es una ventaja de evaluar el desempeño de los procesos en una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Identificar cuellos de botella y optimizar tiempos de ejecución.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Limitar la cantidad de procesos a realizar.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Eliminar la necesidad de tecnología en los procesos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Restringir la colaboración entre departamentos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué se debe hacer después de identificar un bajo desempeño en un proceso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Dejar el proceso sin cambios hasta que surjan problemas mayores.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Implementar medidas correctivas y establecer un plan de mejora.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Mantener el proceso igual, ya que los resultados variarán.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Eliminar inmediatamente todos los recursos asociados.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
