export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Teoría de la administración por procesos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de seguimiento y evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de seguimiento y medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores KPIs',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Auditorías',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Quejas, reclamaciones, sugerencias y felicitaciones de los clientes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación del desempeño de los procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación del desempeño de los procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El valor agregado y su relevancia en los procesos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Indicadores para medir el valor agregado',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Desafíos y estrategias para la medición del valor agregado',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Evaluación del desempeño de los procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Herramientas y técnicas para el seguimiento y evaluación y reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Herramientas de seguimiento',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas de evaluación',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Herramientas de reporte',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pardo Álvarez, J. M. (2017). Gestión por procesos y riesgo operacional: ( ed.). Madrid, Spain: AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53618?page=35',
    },
    {
      referencia:
        'Martinez Martinez, A. & Cegarra Navarro, J. G. (2014). Gestión por procesos de negocio: organización horizontal: ( ed.). Ecobook - Editorial del Economista.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114309?page=1',
    },
    {
      referencia:
        'Angel Maldonado, J. (2012). Gestión de procesos (o gestión por procesos): ( ed.). B - EUMED.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/51718?page=128',
    },
  ],
  glosario: [
    {
      termino: 'Análisis Comparativo',
      significado:
        'Técnica utilizada para evaluar el desempeño de un proceso o producto en relación con estándares internos, competencia o mejores prácticas del sector. Permite identificar áreas de mejora y oportunidades de optimización a través de la comparación de indicadores.',
    },
    {
      termino: 'Benchmarking',
      significado:
        'Proceso sistemático de medición y comparación del desempeño de una organización con empresas líderes del sector. Su objetivo es adoptar mejores prácticas para mejorar la eficiencia y competitividad de los procesos internos.',
    },
    {
      termino: 'Indicadores de Desempeño (KPIs)',
      significado:
        'Métricas cuantificables utilizadas para medir el progreso y eficacia de un proceso o estrategia. Los KPIs permiten evaluar factores como productividad, calidad, rentabilidad y satisfacción del cliente.',
    },
    {
      termino: 'Impacto Organizacional',
      significado:
        'Conjunto de efectos, positivos o negativos, que una mejora de procesos tiene en la estructura, cultura y desempeño de una empresa. Se mide a través de indicadores financieros, operacionales y de satisfacción de las partes interesadas.',
    },
    {
      termino: 'Línea Base',
      significado:
        'Estado inicial de un proceso antes de la implementación de mejoras. Se utiliza como punto de referencia para medir cambios y evaluar el impacto de las acciones correctivas implementadas.',
    },
    {
      termino: 'Medición de Valor Agregado',
      significado:
        'Proceso de análisis que determina el incremento de eficiencia, calidad o rentabilidad generado por la mejora de un proceso. Se centra en identificar actividades que realmente contribuyen a la creación de valor para la organización y sus clientes.',
    },
    {
      termino: 'Matriz de Evaluación',
      significado:
        'Herramienta utilizada para organizar y analizar información sobre el desempeño de un proceso. Permite evaluar la efectividad de estrategias y tomar decisiones basadas en datos concretos',
    },
    {
      termino: 'Monitoreo Continuo',
      significado:
        'Seguimiento sistemático y periódico de un proceso para garantizar su alineación con los objetivos estratégicos de la organización. Se basa en la recopilación y análisis de datos en tiempo real.',
    },
    {
      termino: 'Retorno de Inversión (ROI)',
      significado:
        'Indicador financiero que mide la rentabilidad de una inversión en la mejora de procesos. Se calcula dividiendo los beneficios obtenidos entre el costo de la inversión, expresado en porcentaje.',
    },
    {
      termino: 'Sistema de Gestión del Desempeño',
      significado:
        'Conjunto de herramientas y metodologías utilizadas para medir, evaluar y mejorar la eficiencia de los procesos organizacionales. Incluye el uso de software, indicadores clave y reportes de desempeño.',
    },
  ],
}
