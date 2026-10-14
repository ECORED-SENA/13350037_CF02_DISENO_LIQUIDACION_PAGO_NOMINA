export default {
  global: {
    Name: 'Liquidación, pago y control de nómina',
    Description:
      'La liquidación, el pago y el control de nómina comprenden la aplicación de procedimientos técnicos para calcular devengados, deducciones, aportes, prestaciones sociales y pagos a terceros. A partir de la información previamente validada, se generan comprobantes, registros contables y reportes, se concilian los valores liquidados y pagados, y se realizan los ajustes necesarios, garantizando exactitud, trazabilidad, seguridad de la información y cumplimiento de la normativa vigente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Preparación y metodología de la liquidación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ciclo de nómina, políticas y responsables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Datos del trabajador, contrato y periodo liquidado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Bases de liquidación e ingreso base de cotización',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Fórmulas, proporcionalidad y aproximación de valores',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Depuración y revisión de la prenómina',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Liquidación de devengados y novedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Salario y remuneración variable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Horas extras, trabajo nocturno y días de descanso',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Incapacidades, licencias, ausencias y suspensiones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Vacaciones, prestaciones sociales y provisiones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Terminación, liquidación final e indemnizaciones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Deducciones y pagos a terceros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Aportes descontados al trabajador',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Retenciones, embargos y deducciones autorizadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aportes patronales y parafiscales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Planilla Integrada de Liquidación de Aportes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Pagos a administradoras y demás terceros',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pago, contabilización y conciliación de nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Revisión, autorización y aprobación de la nómina',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Medios de pago y generación de comprobantes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contabilización de gastos, obligaciones y provisiones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conciliación entre nómina, PILA, contabilidad y bancos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Nómina electrónica y reportes del periodo',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ajuste de nómina',
      significado:
        'modificación realizada para corregir errores, omisiones o diferencias identificadas después de liquidar, pagar o reportar la nómina.',
    },
    {
      termino: 'Aporte parafiscal',
      significado:
        'contribución a cargo del empleador destinada, cuando corresponda, a entidades como las cajas de compensación familiar, el SENA y el ICBF.',
    },
    {
      termino: 'Base de liquidación',
      significado:
        'valor utilizado como referencia para aplicar una fórmula, porcentaje o proporción y determinar un concepto de nómina.',
    },
    {
      termino: 'Conciliación de nómina',
      significado:
        'comparación entre la información liquidada, contabilizada, reportada y pagada para identificar y corregir diferencias.',
    },
    {
      termino: 'Deducción',
      significado:
        'valor descontado del total devengado por concepto de aportes, retenciones, embargos, libranzas u otras obligaciones autorizadas.',
    },
    {
      termino: 'Devengado',
      significado:
        'conjunto de valores reconocidos al trabajador durante un periodo, como salario, comisiones, recargos, auxilios y otros conceptos aplicables.',
    },
    {
      termino: 'Embargo salarial',
      significado:
        'descuento ordenado por una autoridad judicial sobre el salario del trabajador, sujeto a los límites establecidos legalmente.',
    },
    {
      termino: 'Ingreso base de cotización',
      significado:
        'valor sobre el cual se calculan los aportes al Sistema de Seguridad Social Integral.',
    },
    {
      termino: 'Liquidación final',
      significado:
        'cálculo de los salarios, prestaciones, vacaciones y demás valores pendientes al finalizar el contrato de trabajo.',
    },
    {
      termino: 'Nómina electrónica',
      significado:
        'documento soporte generado electrónicamente que contiene los valores devengados y deducidos de cada trabajador para efectos tributarios.',
    },
    {
      termino: 'Planilla Integrada de Liquidación de Aportes (PILA)',
      significado:
        'sistema utilizado para reportar y pagar de manera integrada los aportes a seguridad social y parafiscales.',
    },
    {
      termino: 'Prenómina',
      significado:
        'resultado preliminar de la liquidación que permite revisar trabajadores, novedades, devengados, deducciones, bases y valores antes de la aprobación definitiva.',
    },
    {
      termino: 'Provisión',
      significado:
        'reconocimiento periódico de valores causados por beneficios laborales que serán pagados o disfrutados posteriormente.',
    },
    {
      termino: 'Reliquidación',
      significado:
        'nuevo cálculo de uno o varios conceptos de nómina cuando se identifica información incorrecta, incompleta o modificada.',
    },
    {
      termino: 'Soporte de nómina',
      significado:
        'documento o registro que respalda los datos, novedades, cálculos, deducciones, pagos y ajustes realizados durante el proceso de nómina.',
    },
  ],
  referencias: [
    {
      referencia: 'Colpensiones. (2016, 14 de mayo). Historia laboral. ',
      link: 'https://www.colpensiones.gov.co/preguntas-frecuentes/297/historia-laboral/',
    },
    {
      referencia:
        'Colpensiones. (2026, 22 de enero). ¿Cómo aportar para mi pensión? ',
      link: 'https://www.colpensiones.gov.co/educacion/publicaciones/2849/como-aportar-a-pension/',
    },
    {
      referencia: 'Colpensiones. (2026, 20 de mayo). ¿Qué es el RPM? ',
      link: 'https://www.colpensiones.gov.co/pensiones/publicaciones/120/que-es-el-rpm/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1950, 5 de agosto). Código Sustantivo del Trabajo. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=199983',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1963, 1 de febrero). Ley 1 de 1963. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1556008',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1988, 29 de diciembre). Ley 89 de 1988. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1630866',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1990, 28 de diciembre). Ley 50 de 1990. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes%2F1604809',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993, 23 de diciembre). Ley 100 de 1993. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002, 17 de diciembre). Ley 776 de 2002. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2003, 29 de enero). Ley 797 de 2003. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005, 8 de julio). Ley 962 de 2005. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2007, 9 de enero). Ley 1122 de 2007. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008, 16 de julio). Ley 1221 de 2008. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2010, 12 de julio). Ley 1393 de 2010. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2010, 29 de diciembre). Ley 1429 de 2010. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012, 11 de julio). Ley 1562 de 2012. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012, 12 de octubre). Ley 1581 de 2012. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016, 7 de julio). Ley 1788 de 2016. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021, 12 de mayo). Ley 2088 de 2021. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021, 15 de julio). Ley 2101 de 2021. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021, 29 de julio). Ley 2114 de 2021. ',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2006, 4 de octubre). Sentencia C-823/06. ',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022, 11 de abril). Concepto 144581 de 2022. ',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2025, 23 de septiembre). Resolución 000227 de 2025. ',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (s. f.). Documento soporte de pago de nómina electrónica. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006, 6 de marzo). Resolución 0634 de 2006. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Contacto operadores PILA. ',
      link: 'https://www.minsalud.gov.co/Proteccion-Social/Paginas/contacto-operadores-pila.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Planilla Integrada de Liquidación de Aportes (PILA). ',
      link: 'https://www.minsalud.gov.co/Proteccion-Social/Paginas/pila.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016, 10 de junio). Resolución 2388 de 2016. ',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%202388%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019, 16 de septiembre). Anexo técnico 2: Aportes a seguridad social de activos. ',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/Anexo-tecnico-2-2016-pila.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema de pensiones y otras prestaciones. ',
      link: 'https://www.minsalud.gov.co/Proteccion-Social/RiesgosLaborales/Paginas/sistema-general-pensiones.aspx',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2026, 5 de marzo). Decreto 223 de 2026. ',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2012, 16 de abril). Circular Externa 018 de 2012. ',
      link: '',
    },
    {
      referencia:
        'OFIMA. (2026). Nómina electrónica en Colombia: Qué es y cómo funciona en 2026. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1954, 26 de febrero). Decreto 617 de 1954. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994, 22 de junio). Decreto 1295 de 1994. ',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005, 10 de noviembre). Ley 995 de 2005. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1072 de 2015. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015, anexo 1. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015, anexo 2. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016, 6 de diciembre). Decreto 1990 de 2016. ',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016, 6 de mayo). Decreto 780 de 2016. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
