<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Evaluación del desempeño de los procesos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      p(data-aos="fade-up").mb-4 La evaluación del desempeño de los procesos dentro de la gestión por procesos en su etapa de seguimiento y control, es un conjunto de actividades que tiene como objetivo medir la eficacia y eficiencia de los procesos organizacionales.

      p(data-aos="fade-up").mb-5 La metodología para la evaluación del desempeño, es:


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info1.png', alt='Metodología de evaluación del desempeño', style="max-width: 645px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="20%" y="60%" numero="+")
                  h5 Definición de objetivos y KPIs
                  p Establecer objetivos claros y específicos, para guiar los procesos hacia metas alcanzables. Tanto los objetivos como los KPIs deben ser SMART, es decir, específicos, medibles, alcanzables, relevantes y con un tiempo definido para su consecución, lo que facilita el seguimiento y evaluación.
      
                .bg-color-white.box-shadow.p-3(x="26%" y="24%" numero="+")
                  h5 Recolección de datos
                  p La recolección de datos debe incluir métodos cuantitativos como métricas y números precisos, y cualitativos como retroalimentación directa de clientes. Utilizar sistemas como software de gestión o encuestas, permite una recopilación eficiente y oportuna de información relevante para el análisis del desempeño.
      
                .bg-color-white.box-shadow.p-3(x="45%" y="4%" numero="+")
                  h5 Análisis de desempeño
                  p Es necesario comparar los KPIs actuales con los objetivos establecidos, para identificar discrepancias. A través de un análisis de causa raíz, se puede comprender por qué existen desviaciones y determinar las acciones correctivas necesarias, para mejorar los resultados.
      
                .bg-color-white.box-shadow.p-3(x="67%" y="13%" numero="+")
                  h5 Informes y comunicación
                  p Los informes deben ser claros y comprensibles para que todos los involucrados puedan entender el desempeño de los procesos. Comunicar estos resultados es necesario para mantener informados a todos, incluidos el equipo operativo y la alta dirección, promoviendo la toma de decisiones informadas.
      
                .bg-color-white.box-shadow.p-3(x="80%" y="46%" numero="+")
                  h5 Implementación de acciones correctivas
                  p Una vez que se identifican las áreas de mejora, es importante diseñar e implementar planes de acción para corregir las deficiencias. Además, se deben establecer ciclos de revisión periódicos, para evaluar la efectividad de las acciones implementadas y ajustar las estrategias, según sea necesario.
      
                .bg-color-white.box-shadow.p-3(x="75%" y="82%" numero="+")
                  h5 Cultura de mejora continua
                  p La mejora continua debe ser parte de la cultura organizacional, donde todos los miembros del equipo se sientan motivados para proponer y probar nuevas ideas. Este enfoque contribuye a la innovación y el perfeccionamiento constante, asegurando el crecimiento y éxito sostenido de la organización.

      .bg-full-width.bg-fondo-7
        .px-4.px-md-5.pb-md-3
          div.row.justify-content-center.align-items-stretch.mb-5#tarjetas
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icono-1.svg"
                  alt="Ícono optimización de recursos"
                  style="width: 90px"
                )
                h4.text-center.mb-3 Optimización de recursos
                p.mb-0.text-center Consigue que se utilicen los recursos de manera más eficiente, lo que puede traducirse en ahorro de costos.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icono-2.svg"
                  alt="Ícono satisfacción del cliente"
                  style="width: 90px"
                )
                h4.text-center.mb-3 Satisfacción del cliente
                p.mb-0.text-center Mejora el rendimiento del proceso y puede resultar en un mejor servicio o producto final, aumentando la satisfacción del cliente.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icono-3.svg"
                  alt="Ícono adaptabilidad"
                  style="width: 90px"
                )
                h4.text-center.mb-3 Adaptabilidad
                p.mb-0.text-center Facilita a la organización adaptarse a cambios en el entorno de negocio o en las necesidades del cliente, manteniéndose competitiva.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icono-4.svg"
                  alt="Ícono aumento en la motivación del personal"
                  style="width: 90px"
                )
                h4.text-center.mb-3 Aumento en la motivación del personal
                p.mb-0.text-center Un entorno donde se reconocen y se resuelven problemas puede aumentar la moral y el compromiso del equipo.



      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/BgQcCnBKvdk?si=pBloj19c2rkt-c2Y" target="_blank" rel="noopener noreferrer") El Blog De Raffo (2020, 19 de octubre) Medición del desempeño y automatización de procesos de producción, manufactura y compras.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/articulo.oa?id=360446197006" target="_blank" rel="noopener noreferrer") Leyva-Del Toro, C., De Miguel-Guzmán, M., & Pérez-Campdesuñer, R. (2016). La evaluación del desempeño, los procesos y la organización. Ingeniería Industrial, 37(2), 1-15.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
