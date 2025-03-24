<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de seguimiento y evaluación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La verificación representa la tercera fase en la gestión de procesos, en la cual se recopilan datos objetivos para evaluar si los procesos operan conforme a lo planificado y si los productos o servicios generados, satisfacen los requerimientos de los clientes. En muchas organizaciones, no es inusual que esta etapa se omita, confiando únicamente en percepciones subjetivas para determinar el desempeño del proceso. Sin embargo, esta práctica conlleva riesgos, dado que las impresiones personales no siempre reflejan con precisión, la realidad operativa, lo que puede derivar en decisiones ineficaces.
        
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/icon-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta fase es fundamental, puesto que permite mantener el control sobre los procesos y facilita la implementación de mejoras que optimicen los resultados. Cuando no se realiza una verificación adecuada, la siguiente etapa del ciclo de gestión, que implica la toma de acciones para mejorar, suele quedar relegada o carecer de un impacto significativo en el desarrollo de la organización (Pardo Álvarez, J. M. 2017). 

        p(data-aos="fade-left") Para entender mejor esta etapa, vamos a profundizar en algunos conceptos.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
    

    h2(data-aos="fade-left").mb-5 ¿Qué es el seguimiento y evaluación en la gestión de procesos?     

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/2.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El seguimiento y la evaluación en la gestión de procesos, es un enfoque sistemático que permite monitorear, analizar y valorar el desempeño de los procesos organizacionales con el fin de garantizar su eficiencia y mejora continua. El seguimiento se centra en la recolección y análisis de datos en tiempo real, para detectar desviaciones respecto a los estándares establecidos, mientras que la evaluación busca determinar el grado de efectividad y el impacto de las acciones implementadas en los procesos.


    p(data-aos="fade-left").mb-5 El seguimiento y control permite a las organizaciones tomar decisiones informadas sobre la eficiencia de sus procesos, identificando fortalezas y áreas de mejora. Para ello, se utilizan diversos métodos como indicadores claves de desempeño (KPIs), auditorías de procesos, encuestas de satisfacción y análisis de tendencias.


    .titulo-figura.mb-2
      h5 Figura 1. 
      span Etapa de verificación ciclo PHVA.
    
    figure.bg-color-info.p-4.p-md-5
      img(src="@/assets/curso/tema1/f1.png", data-aos="zoom-in", style="max-width: 840px").mx-auto
    figcaption.mt-2.text-center.mb-4 Nota. Tomado y adaptado de Pardo Álvarez (2017).
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Para comprender a fondo los elementos involucrados en el seguimiento y evaluación de los procesos, es esencial recordar el ciclo PHVA (Planear, Hacer, Verificar y Actuar). Esta metodología es una herramienta necesaria en la administración por procesos, porque permite estructurar las acciones necesarias para garantizar la mejora continua, en cualquier organización.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/icon-2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En la figura, esta etapa se representa con una flecha roja y se asocia a diversos mecanismos que facilitan su ejecución, como el uso de indicadores, auditorías, controles internos, revisión de la dirección y la recopilación de información a través de quejas, sugerencias y felicitaciones de los clientes.


        p(data-aos="fade-left") Dentro de este ciclo, la fase de verificación cobra especial relevancia, pues es el momento en el que se recopilan y analizan datos objetivos para determinar si los procesos se están desarrollando conforme a lo planificado y si los productos o servicios, cumplen con los estándares y expectativas de los clientes. 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
    

    .bg-full-width.image-out-bg
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 295px;").mx-auto
          .col-lg
            .py-4.pt-5
              p.mb-0.text-white El propósito de esta fase es detectar posibles desviaciones o áreas de oportunidad, lo que permitirá tomar decisiones en la siguiente etapa del ciclo: actuar para mejorar. Sin una verificación adecuada, las acciones correctivas o de optimización, pueden carecer de fundamento, afectando la eficiencia y el desempeño organizacional.
    

              
              
              
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Evi-3FbInXs?si=FlkdMjCHQhzU4wBT" target="_blank" rel="noopener noreferrer") San José Fundación de Educación Superior (2019, 28 de marzo) ADRIANA LARA NAVARRO MATERIA EVALUACIÓN Y CONTROL PROCESOS EMPRESARIALES TEMA GESTIÓN EMPRESARIAL.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/870/87050902009/html/" target="_blank" rel="noopener noreferrer") Hernández Madrigal, M. (2017). Sistemas de control de gestión y de medición del desempeño: Conceptos básicos como marco para la investigación. Redalyc.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color
  &-1
    background-color: #F7EAD7
  &-2
    background-color: #FAE8E3
  &-3
    background-color: #E5E2E7
  &-4
    background-color: #4A665C
</style>
