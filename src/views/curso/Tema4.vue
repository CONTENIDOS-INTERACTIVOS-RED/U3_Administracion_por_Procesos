<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Medición del valor agregado de los procesos mejorados'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
          div.tarjeta.bg-color-t4-1.py-4.px-3.h-100
            p.mb-0 La medición del valor agregado de los procesos mejorados, permite evaluar de manera objetiva el impacto de las mejoras implementadas en la eficiencia, calidad y rentabilidad de una organización. Este concepto hace referencia a la forma en que las actividades y cambios dentro de un proceso, pueden generar valor tangible e intangible, tanto para la empresa como para sus clientes y otros stakeholders.
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
          div.tarjeta.bg-color-t4-2.py-4.px-3.h-100
            p.mb-0 La gestión por procesos, que se basa en la identificación, modelado, control y mejora continua de los procesos organizacionales, busca optimizar cada etapa para reducir costos, mejorar la calidad del producto o servicio, y aumentar la satisfacción del cliente. Sin embargo, para asegurar que las modificaciones sean efectivas, es necesario medir y analizar el valor agregado que estas mejoras aportan.
      

      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] El valor agregado y su relevancia en los procesos

      .bg-full-width.bg-color-t4-3
        .px-4.px-md-5
          .row.justify-content-between.align-items-center
            .col-lg-6
              .py-4.pt-md-5
                p(data-aos="fade-left").mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
                
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="El valor agregado y su relevancia en los procesos"
                  tiempo
                  :audio="require('../../assets/curso/podcast/podcast1.mp3')"
                )
      
            .col-lg-4
              figure
                img(src="@/assets/curso/tema4/2.svg", data-aos="zoom-in")
      .bg-full-width.bg-color-t4-4.mb-5
        .px-4.px-md-5.py-3
          p.mb-0 Cada tarea dentro de un proceso, o el proceso en su conjunto, debe ser evaluada y revisada por el equipo de trabajo.

      p(data-aos="fade-left").mb-4 Es fundamental preguntarse si esta actividad realmente aporta valor al cliente final, o al proceso. Existen dos tipos de actividades que no agregan valor (ANV):

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-1.png")
              .col-lg-7
                h4 Actividades innecesarias causadas por un diseño deficiente del proceso
                p Estas actividades surgen cuando el proceso no está funcionando correctamente o no fue diseñado de manera adecuada. Ejemplos de esto son movimientos innecesarios, tiempos de espera, preparación previa para otras actividades, almacenamiento y retrabajo. Aunque no son necesarias para obtener el resultado esperado, se realizan debido a las deficiencias en el diseño del proceso. Este tipo de actividades suelen considerarse parte de los costos asociados con la baja calidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-2.png")
              .col-lg-7
                h4 Actividades que no son requeridas ni por el cliente ni por el proceso
                p Son aquellas que no aportan valor y que pueden eliminarse sin afectar el resultado final que recibe el cliente.
      

      .titulo-figura.mb-2
        h5 Figura 3. 
        span Evaluación del valor agregado.
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema4/f3.png", data-aos="zoom-in", style="max-width: 985px;").mx-auto
      
      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Desafíos y estrategias para la medición del valor agregado

      p.mb-5 Existen diversos indicadores y herramientas, que pueden ser utilizados para medir el valor agregado de los procesos mejorados. Algunos de estos incluyen:
      
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-1-2.png" alt="Tiempo de ciclo")
              .col-lg-7
                h4 Tiempo de ciclo
                p La reducción en el tiempo necesario para completar un proceso o entregar un producto o servicio es un indicador clave de mejora. La reducción de tiempos de ciclo generalmente se traduce en una mayor eficiencia, mejor aprovechamiento de recursos y aumento de la satisfacción del cliente.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-2-2.png" alt="Costos operativos")
              .col-lg-7
                h4 Costos operativos
                p Evaluar el impacto de la mejora en los costos operativos es esencial. Una disminución en los costos sin comprometer la calidad del producto o servicio es un claro indicador de valor agregado.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-3-2.png" alt="Calidad")
              .col-lg-7
                h4 Calidad
                p La mejora en la calidad del producto o servicio también es una métrica fundamental. A través de técnicas como el control estadístico de procesos o la evaluación de la satisfacción del cliente, las organizaciones pueden medir el impacto directo de las mejoras en la calidad percibida por los clientes.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-4-2.png" alt="Satisfacción del cliente")
              .col-lg-7
                h4 Satisfacción del cliente
                p La percepción del cliente es uno de los mejores reflejos del valor agregado. A través de encuestas y otros métodos de retroalimentación, se puede medir cómo las mejoras en los procesos impactan la experiencia del cliente.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-5-2.png" alt="Retorno de la inversión (ROI)")
              .col-lg-7
                h4 Retorno de la inversión (ROI)
                p El cálculo del ROI relacionado con las mejoras en los procesos, es una forma directa de medir el valor financiero generado. El ROI compara los beneficios económicos obtenidos, con los costos asociados a la implementación de las mejoras.

      
      #t_4_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.3] Desafíos y estrategias para la medición del valor agregado


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Medir el valor agregado de los procesos mejorados, no está exento de desafíos. Es necesario contar con sistemas adecuados de recolección de datos, análisis y reportes, para realizar una evaluación precisa. Además, la medición debe ser coherente con los objetivos estratégicos de la organización y con las expectativas de los clientes.
      
          .bg-color-t4-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/icon-1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Una estrategia eficaz para la medición del valor agregado, es integrar la medición de los procesos dentro de un sistema de gestión de calidad y mejora continua. Esto permitirá monitorear el progreso, e identificar áreas de oportunidad y ajustes necesarios. Implementar herramientas como el mapeo de procesos, análisis de causa y efecto o el ciclo PDCA (Plan-Do-Check-Act) puede ser muy útil en este sentido.
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      
            
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/SasdXfq99Ss?si=-tR-W4IF5zDaMdlg" target="_blank" rel="noopener noreferrer") Nodocios Conectando (2011, 2 de noviembre) GENERA VALOR AGREGADO A TU NEGOCIO 2 EDGAR RUFFINENGO NODOCIOS.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/journal/5537/553775346004/html/" target="_blank" rel="noopener noreferrer") Vinajera-Zamora, A., Cespón-Castro, R., & Marrero-Delgado, F. (2023). Determinación del valor agregado sostenible de los procesos en la cadena de suministro. Revista UIS Ingenierías, 22(1), 35-48.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://investigacion.fca.unam.mx/docs/memorias/2011/1.26.pdf" target="_blank" rel="noopener noreferrer") Mayorga Sanchez, J. Z., & Bonilla Bonilla, Y. M. (2011). Medición de la productividad por el método del valor agregado (MPVA) a las Pymes de familia del sector industria de la ciudad de Bogotá D.C.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-t4
  &-1
    background-color: #E5E2E7
  &-2
    background-color: #F9E6C3
  &-3
    background-color: #FAE8E3
  &-4
    background-color: #FCF3F0
  &-5
    background-color: #CFE3DC
</style>
