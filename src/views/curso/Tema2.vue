<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Métodos de seguimiento y medición'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .bg-color-t2-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En la gestión por procesos, el seguimiento y la medición son fundamentales para evaluar el desempeño y garantizar el cumplimiento de los objetivos organizacionales. Para ello, se aplican diversos métodos que permiten obtener datos objetivos y tomar decisiones informadas. A continuación, se presentan algunos de los principales métodos de seguimiento y medición.
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Indicadores KPIs


      p.mb-5(data-aos="fade-up") Los indicadores representan un mecanismo fundamental para evaluar el desempeño de los procesos. Se definen como herramientas de medición que permiten obtener información objetiva sobre su funcionamiento, como el porcentaje de productos con defectos o el tiempo de respuesta en la prestación de un servicio. Su propósito principal es determinar si los procesos están logrando los resultados esperados. Se considera que un proceso es eficaz, cuando los resultados obtenidos satisfacen los requisitos establecidos por los clientes, tanto internos como externos.


      .row.justify-content-center.mb-4
        .col-lg-10

          .bg-color-t2-2
            .row.justify-content-center.align-items-center
              .col-lg
                .px-4.pt-4
                  p.mb-0(data-aos="fade-up") El término KPIs proviene del acrónimo en inglés Key Performance Indicators, que se traduce como Indicadores Claves de Desempeño. Estas métricas permiten evaluar el nivel de cumplimiento de los factores más relevantes en el rendimiento de una organización.
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/2.svg', alt='', style="max-width: 295px")

          .bg-color-t2-3
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='', style="max-width: 295px")
              .col-lg
                .px-4.pt-4
                  p.mb-0(data-aos="fade-up") Cada empresa define sus propios indicadores, según sus necesidades y objetivos, y la dirección los emplea para examinar la situación actual del negocio y tomar decisiones estratégicas. Frecuentemente, los KPIs se utilizan para monitorear el avance hacia metas específicas, alineadas con la planificación estratégica de la organización.


      p(data-aos="fade-up").mb-5 Conozcamos algunos indicadores:

      .row.align-items-start.mb-5#aco-1
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Indicadores de eficacia e indicadores de eficiencia")
              p Los #[strong indicadores de eficacia] permiten evaluar en qué medida se cumplen los requisitos establecidos por los clientes, ya sean internos o externos. Algunos ejemplos incluyen:
              ul.lista-ul.mb-3
                li 
                  i.fas.fa-arrow-circle-right
                  | El porcentaje de propuestas comerciales aceptadas.
                li
                  i.fas.fa-arrow-circle-right
                  | El peso promedio de un lote de producción.
            
              p Por otro lado, los #[strong indicadores de eficiencia] reflejan la relación entre los resultados obtenidos y los recursos utilizados para alcanzarlos, siendo de especial interés para la dirección de la empresa. Ejemplos comunes son:
              ul.lista-ul
                li
                  i.fas.fa-arrow-circle-right
                  | La cantidad de clientes atendidos por cada empleado.
                li
                  i.fas.fa-arrow-circle-right
                  | El costo por unidad producida.

            .div(titulo="Indicadores de resultado e indicadores de operativa")
              p Los #[strong indicadores de resultado] se evalúan al finalizar un proceso y reflejan el desempeño alcanzado. Algunos ejemplos incluyen:
              ul.lista-ul.mb-3
                li
                  i.fas.fa-arrow-circle-right
                  | El porcentaje de paquetes extraviados.
                li
                  i.fas.fa-arrow-circle-right
                  | La cantidad de entregas realizadas por cada trabajador.
            
              p Los #[strong indicadores operativos] se enfocan en el desarrollo interno del proceso antes de su conclusión, permitiendo monitorear etapas específicas. Por ejemplo, si el indicador de resultado es el "tiempo de entrega en destino", un indicador operativo asociado podría ser la "velocidad de desplazamiento".

            .div(titulo="Indicadores directos e indirectos")
              p Los #[strong indicadores directos o de primer nivel] permiten medir de forma directa una variable o requisito específico. Por ejemplo:
              ul.lista-ul.mb-3
                li
                  i.fas.fa-arrow-circle-right
                  | El porcentaje de operaciones finalizadas dentro del plazo establecido.
            
              p Los #[strong indicadores indirectos o de segundo nivel] se emplean cuando la medición directa resulta compleja o costosa. Por ejemplo:
              ul.lista-ul
                li
                  i.fas.fa-arrow-circle-right
                  | El número de reclamaciones por retraso, que puede servir como referencia para evaluar el cumplimiento de los plazos.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      

      .row.align-items-start.mb-5#aco-2
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Indicadores de calidad objetiva, e indicadores de calidad percibida")
              p Estos indicadores pueden considerarse una categoría dentro de los indicadores de resultado, dado que están relacionados con la reacción de los clientes externos ante los productos o servicios adquiridos.
              
              p Los #[strong indicadores de calidad percibida] reflejan la percepción del cliente sobre un producto o servicio, evaluando su experiencia de consumo. Su propósito es medir el nivel de satisfacción del cliente, basándose en la información proporcionada directamente por los usuarios. Algunos ejemplos incluyen:
              ul.lista-ul.mb-3
                li
                  i.fas.fa-arrow-circle-right
                  | Índice de satisfacción del cliente.
                li
                  i.fas.fa-arrow-circle-right
                  | Número de comentarios positivos o felicitaciones recibidas.

              p Los #[strong indicadores de calidad objetiva] se enfocan en evaluar la satisfacción del cliente a través de datos medibles y objetivos, basándose en el comportamiento de los consumidores respecto a los productos o servicios adquiridos. Algunos ejemplos son:
              ul.lista-ul
                li
                  i.fas.fa-arrow-circle-right
                  | Porcentaje de clientes que realizan compras repetidas.
                li
                  i.fas.fa-arrow-circle-right
                  | Proporción de productos que requieren garantía.

            .div(titulo="Indicadores compuestos")
              p Existen, además de los indicadores tradicionales, los llamados indicadores compuestos, los cuales integran múltiples indicadores específicos en un único valor. Los elementos que conforman un indicador compuesto pueden estar o no correlacionados estadísticamente, contar o no con una unidad de medida común, o tener diferente peso en su influencia.

              p Un caso representativo es el "Índice de Bienestar Global", utilizado para evaluar la calidad de vida en diversas naciones. Su cálculo se basa en la combinación de varios subindicadores, entre ellos:
              ul.lista-ul.mb-3
                li
                  i.fas.fa-arrow-circle-right
                  | Promedio de años de vida.
                li
                  i.fas.fa-arrow-circle-right
                  | Nivel de acceso a la educación.
                li
                  i.fas.fa-arrow-circle-right
                  | Tasa de alfabetización.
                li
                  i.fas.fa-arrow-circle-right
                  | Ingreso nacional bruto per cápita.

              p Este tipo de indicadores también pueden aplicarse en el desarrollo de productos y servicios dentro de las organizaciones. Por ejemplo, en el ámbito del servicio de atención al cliente por teléfono, es posible diseñar un indicador compuesto llamado "Índice de eficiencia en la atención telefónica". Este indicador podría estar conformado por los siguientes subindicadores:
              ul.lista-ul
                li
                  i.fas.fa-arrow-circle-right
                  | Proporción de llamadas respondidas.
                li
                  i.fas.fa-arrow-circle-right
                  | Porcentaje de llamadas atendidas en menos de 15 segundos.
                li
                  i.fas.fa-arrow-circle-right
                  | Tasa de resolución en el primer contacto.


      .titulo-figura.mb-2
        h5 Figura 2. 
        span Posible clasificación de indicadores de proceso.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema2/f2.png", data-aos="zoom-in", style="max-width: 1166px")
      figcaption.mt-2.text-center.mb-5 Nota. Tomado y adaptado de Pardo Álvarez (2017).


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Auditorías

      .bg-color-t2-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La auditoría es un mecanismo de verificación que permite identificar oportunidades de mejora dentro de una organización. A través de este proceso, se detectan fallos en la ejecución de los procedimientos, lo que facilita el incremento de su eficacia y eficiencia. Los auditores tienen la función de evaluar si la entidad opera conforme a lo establecido, actuando como testigos de la realidad organizacional y certificando el estado actual de los procesos, con base en los lineamientos definidos por la propia institución.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/6.svg', alt='')      
      

      p.mb-5(data-aos="fade-up") La auditoría de procesos, en sí misma, constituye un proceso, puesto que implica un conjunto de actividades interconectadas que convierten insumos, como la información sobre los procedimientos, en un producto final: el informe de auditoría. Este documento, entregado a la alta dirección, proporciona valor al evidenciar irregularidades y proponer mejoras en los procesos.

      p(data-aos="fade-up").mb-5 El desarrollo de una auditoría de procesos, puede iniciarse con los siguientes pasos:


      .row.align-items-start.mb-5
        .col-lg-5.order-1
          figure
            img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-7.order-2      
          LineaTiempoD.color-primario(data-aos="fade-right")
            p(numero="1" titulo="Paso 1") Designación del equipo auditor y del responsable del equipo (auditor líder), tarea que generalmente es asumida por la dirección de la organización. En cada auditoría, se definirán tres aspectos fundamentales: su objetivo, alcance y criterios de evaluación:
              br
              br
              strong Objetivo: 
              | representa la finalidad o propósito de la auditoría. Un posible objetivo puede ser verificar si los procesos están siendo gestionados de manera efectiva y, si es necesario, evaluar también su eficiencia.
              br
              br
              strong Alcance: 
              | comprende la identificación de los procesos que serán auditados, así como las áreas o sedes de la organización involucradas.
              br
              br
              strong Criterios de auditoría: 
              | corresponden a los documentos de referencia que permiten determinar si una práctica específica cumple con los estándares establecidos. Estos criterios suelen incluir normativas, procedimientos, instrucciones y especificaciones relacionadas con los procesos.

            p(numero="2" titulo="Paso 2") El auditor líder establecerá contacto con los responsables de los procesos auditados, para coordinar fechas y confirmar tanto el objetivo como el alcance de la auditoría. En el caso de no disponer de los criterios de auditoría necesarios, se procederá a solicitarlos.

            p(numero="4" titulo="Paso 4") Asimismo, se realizará un análisis de la documentación vinculada a los procesos que serán auditados. En esta etapa preliminar, es posible identificar hallazgos iniciales, como no conformidades, oportunidades de mejora, fortalezas y aspectos a observar, así como definir posibles líneas de investigación a seguir durante la auditoría.

            p(numero="5" titulo="Paso 5") Es importante elaborar listas de verificación que incluyan los temas a revisar, la metodología para contrastar la información, los interlocutores involucrados y los espacios que serán auditados. Estas listas funcionan como una guía para recopilar datos clave durante la auditoría en campo, resultando especialmente útiles para auditores con menos experiencia. También existen otras opciones para estructurar la revisión, como el uso de esquemas, el resaltado de información en los documentos, entre otros métodos.

            p(numero="6" titulo="Paso 6") La auditoría en campo representa la fase central del proceso. Comienza con una reunión de apertura en la que el equipo auditor se presenta y se confirma el plan de trabajo. A partir de ese momento, se recopila información relevante sobre los procesos auditados, obteniendo evidencias a través de registros, observación de actividades, entrevistas con el personal y recorridos por las instalaciones. Posteriormente, esta información se contrasta con los criterios establecidos, lo que permite identificar hallazgos, los cuales pueden clasificarse en diferentes categorías.


      p(data-aos="fade-up").mb-5 Los hallazgos identificados durante la auditoría, pueden clasificarse en las siguientes categorías:

      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-8
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-1.svg' alt='Icono conformidades' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Conformidades
                  p.text-center Indican que el proceso evaluado cumple con los requisitos establecidos y funciona correctamente. Es el tipo de hallazgo más frecuente.

                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-2.svg' alt='Icono no conformidades' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 No conformidades
                  p.text-center Señalan el incumplimiento de algún requisito previamente definido, ya sea por la organización, los clientes o la normativa aplicable.

                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-3.svg' alt='Icono oportunidades de mejora' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Oportunidades de mejora
                  p.text-center Proponen acciones que podrían optimizar el desempeño del proceso.

                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-4.svg' alt='Icono observaciones' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Observaciones
                  p.text-center Corresponden a desviaciones menores o incumplimientos puntuales. En algunas organizaciones, estos hallazgos se agrupan junto con las oportunidades de mejora.

                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-5.svg' alt='Icono puntos fuertes' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Puntos fuertes
                  p.text-center Destacan aspectos positivos de la gestión de los procesos dentro de la organización.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/8a.png', alt='')
      
      
      .bg-full-width.image-out-bg.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/8.svg', alt='', style="max-width: 295px")
          .col-lg
            .p-4.pt-5
              p.my-3(data-aos="fade-up").text-white Una vez finalizada la auditoría en campo, se debe elaborar el informe correspondiente y presentarlo a la dirección de la organización.

              p.text-white Después de la presentación del informe de auditoría, los responsables de los procesos evaluados, deben implementar acciones correctivas y de mejora en aquellas áreas donde se hayan identificado no conformidades, observaciones o posibles oportunidades de optimización.
      

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Quejas, reclamaciones, sugerencias y felicitaciones de los clientes
      

      p(data-aos="fade-up").mb-5 La gestión de quejas, reclamaciones, sugerencias y felicitaciones es un aspecto clave en la relación entre las organizaciones y sus clientes, ya que permite identificar oportunidades de mejora y fortalecer la confianza en la marca.

      .bg-full-width.bg-color-t2-6.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Quejas, reclamaciones, sugerencias y felicitaciones de los clientes 
              p.mb-4(data-aos="fade-right") En el PDF Quejas, se presentan los principales factores que influyen en la experiencia del cliente y su impacto en la fidelización. Además, se analizan estrategias para el manejo adecuado de quejas y la importancia de los comentarios positivos como herramienta para evaluar la calidad del servicio y la satisfacción del consumidor.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Quejas, reclamaciones, sugerencias y felicitaciones de los clientes 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/anexo-1.png', alt='')
      

      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Otros mecanismos de seguimiento


      p(data-aos="fade-up").mb-5 Otros mecanismos de seguimiento son:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-1.png" alt="Control Estadístico de Procesos")
              .col-lg-7.order-lg-1
                h5 Control Estadístico de Procesos (CEP)
                p Método basado en herramientas estadísticas (gráficos de control, histogramas, diagramas de dispersión) para analizar la variabilidad del proceso y prevenir defectos.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-2.png" alt="Evaluaciones de desempeño")
              .col-lg-7.order-lg-1
                h5 Evaluaciones de desempeño
                p Análisis del rendimiento de los empleados en relación con los procesos en los que participan, asegurando que sus actividades contribuyan a los objetivos organizacionales.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png" alt="Autoevaluación de procesos")
              .col-lg-7.order-lg-1
                h5 Autoevaluación de procesos
                p Método en el que los propios equipos de trabajo analizan el desempeño de sus procesos y proponen mejoras, de manera proactiva.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-4.png" alt="Revisión por la dirección")
              .col-lg-7.order-lg-1
                h5 Revisión por la dirección
                p Evaluación periódica realizada por la alta dirección, para analizar el desempeño de los procesos y tomar decisiones estratégicas de mejora.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-5.png" alt="Análisis de Brechas")
              .col-lg-7.order-lg-1
                h5 Análisis de Brechas (Gap Analysis)
                p Comparación entre el desempeño actual del proceso y el desempeño esperado, con el fin de identificar áreas de mejora.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-6.png" alt="Benchmarking")
              .col-lg-7.order-lg-1
                h5 Benchmarking
                p Comparación del desempeño de los procesos internos con los de empresas líderes en el sector, para identificar mejores prácticas y oportunidades de innovación.
      
      
      
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
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-t2
  &-1
    background-color: #E5E2E7
  &-2
    background-color: #FDF6EA
  &-3
    background-color: #F7EAD7
  &-4
    background-color: #F7EAD7
  &-5
    background-color: #4A665C
  &-6
    background-color: #E5E2E7
</style>
