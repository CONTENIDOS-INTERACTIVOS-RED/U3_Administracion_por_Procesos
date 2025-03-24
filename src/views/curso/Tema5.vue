<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'5. Análisis comparativo de procesos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p.mb-5 Numerosas empresas han comenzado a implementar la comparación de procesos, debido a que este enfoque se ajusta bien al modelo operativo de mejora del rendimiento.

      .bg-color-t5-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema5/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La comparación de procesos, se enfoca en analizar procesos específicos dentro de la organización, en lugar de evaluar toda la empresa de manera general. La idea principal detrás de este análisis es que, al identificar los procesos que siguen las mejores prácticas y compararlos con los procesos que utiliza la organización, los gerentes pueden optimizar el rendimiento de ciertos subsistemas, lo que resulta en una mejora general. 


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 El propósito de esta técnica es perfeccionar diversas etapas del proceso y aumentar la eficiencia al "aprender de los demás". Un aspecto crucial para el éxito de la comparación de procesos, es el intercambio de experiencias. Por ejemplo, al comparar indicadores claves y los procedimientos actuales que afectan dichos indicadores en diferentes empresas de servicios, es posible identificar las mejores prácticas y transferirlas a aquellas organizaciones con un rendimiento inferior, las cuales podrían adoptarlas para mejorar su eficiencia.
      
          .bg-color-t5-2.p-4(data-aos="fade-left")
            p.mb-0 Así, la comparación de procesos sirve como una herramienta para identificar procedimientos específicos que pueden ser optimizados mediante la adopción de ejemplos de excelencia externa, considerados las mejores prácticas en la industria. En este contexto, la comparación de procesos implica, por ejemplo, comparar una empresa de servicios con otras similares para fomentar el auto-mejoramiento mediante la adopción de estructuras o métodos exitosos en otras partes. En resumen, este enfoque permite a la empresa comprender cómo operan otras organizaciones, determinar si son más eficientes y, en caso afirmativo, evaluar si esos métodos pueden ser aplicados para mejorar sus propios resultados.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")


      .bg-full-width.image-out-bg.mb-5
        .px-4.px-md-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/3.svg", style="max-width: 295px").mx-auto
            .col-lg
              .py-4
                p.my-3.text-white Es importante señalar que la comparación métrica identifica áreas con bajo rendimiento que requieren cambios, mientras que la comparación de procesos es el medio para implementar dichos cambios.

                p.mb-0.text-white La herramienta apropiada y conocida para este aplicar la comparación de procesos, se denomina Benchmarking.
      
      
      #t_5_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.1] Benchmarking

      p(data-aos="fade-up").mb-5 El benchmarking es una herramienta clave para la mejora continua en las organizaciones, ya que permite comparar procesos, productos y servicios con los de empresas líderes para identificar y adoptar mejores prácticas.


      .bg-full-width.bg-color-t5-4.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4(data-aos="fade-right") En el PDF Benchmarking, se analizan los diferentes tipos de benchmarking, desde el interno hasta el competitivo y genérico, así como los pasos necesarios para implementarlo de manera efectiva. A través de esta metodología, las empresas pueden optimizar su desempeño, mejorar su eficiencia y fortalecer su competitividad en el mercado.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Benchmarking
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/4.png', alt='')
      
      
            
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/ue4KaGAJQaU?si=FdGNB22SPrtrrlt6" target="_blank" rel="noopener noreferrer") Crece Pymes (2018, 5 de junio) Benchmarking.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/journal/1650/165046671006/html/" target="_blank" rel="noopener noreferrer") Perdomo Charry, G., Arias Pérez, J. E., & Lozada, N. E. (2016). Análisis comparativo del cambio organizacional e institucional de dos incubadoras de empresas. Redalyc.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<style lang="sass">
.bg-color-t5
  &-1
    background-color: #F7EAD7
  &-2
    background-color: #FAE8E3
  &-3
    background-color: #4A665C
  &-4
    background-color: #E5E2E7
</style>
