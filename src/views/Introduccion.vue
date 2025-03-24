<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Para todas las organizaciones, la mejora continua de los procesos es fundamental para garantizar eficiencia, calidad y sostenibilidad; sin embargo, no basta con implementar cambios, es necesario llevar a cabo, rigurosamente, un seguimiento y una evaluación, para determinar si realmente generan el impacto esperado.

        p(data-aos="fade-left").mb-4 Esta unidad aborda la importancia del monitoreo, la medición del valor agregado y el análisis comparativo de procesos como herramientas claves para la toma de decisiones estratégicas en la gestión empresarial.

        p.mb-0 Esta unidad se estructura en seis temas principales:
    

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 1
                p.text-center Conceptos básicos de seguimiento y evaluación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 2
                p.text-center Métodos de seguimiento y medición.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 3
                p.text-center Evaluación del desempeño de los procesos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 4
                p.text-center Medición del valor agregado de los procesos mejorados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 5
                p.text-center Análisis comparativo de procesos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/icon-6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tema 6
                p.text-center Herramientas y técnicas para el seguimiento, evaluación y elaboración de reportes.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/intro/2.png', alt='')
    
    .bg-full-width.image-out-bg.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 295px").mx-auto
          .col-lg
            .pt-4
              p.mb-3.text-white La apropiación de estos temas permitirá, a los futuros administradores y gestores empresariales, tomar decisiones informadas, aumentar la competitividad y contribuir a la eficiencia operativa. 

              p.mb-0.text-white A través del seguimiento y la evaluación, se pueden identificar oportunidades de mejora y asegurar que las iniciativas de cambio generen un verdadero valor agregado.
      
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Durante el desarrollo de la unidad, se utilizarán estudios de caso, ejercicios prácticos y análisis de reportes, para aplicar los conceptos en contextos reales. Se espera que los estudiantes participen enérgicamente, en cada actividad, reflexionando sobre la importancia del seguimiento y la evaluación en la optimización de procesos.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/icon-7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al finalizar esta unidad, los estudiantes estarán en capacidad de diseñar propuestas de mejoramiento e innovación de procesos, como alternativas de crecimiento y sostenibilidad empresarial, basándose en los principios y los valores. De esta manera, podrán evaluar la efectividad de las estrategias implementadas y proponer ajustes que optimicen la gestión organizacional.
    

        p(data-aos="fade-left") Para aprovechar al máximo esta unidad, se recomienda a los estudiantes revisar los conceptos fundamentales de modelamiento de procesos vistos en unidades anteriores. Su compromiso y participación serán claves para fortalecer su capacidad de análisis y toma de decisiones en el ámbito organizacional.
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/4.png", data-aos="zoom-in")
    

</template>
<style lang="sass">
.bg-color
  &-1
    background-color: #F7EAD7
  &-2
    background-color: #4A665C
  &-3
    background-color: #FAE8E3

.bg-fondo
  &-1
    background-image: url("../assets/bg/bg1.png") !important
    background-position: top
</style>
