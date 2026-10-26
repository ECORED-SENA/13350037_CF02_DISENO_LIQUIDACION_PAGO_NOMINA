<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Pago, contabilización y conciliación de nómina
      .bg___color_2
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_1.fit___box_4(data-aos="fade-right")
                p.mb-0 Una vez liquidados y revisados los devengados, las deducciones y los pagos a terceros, la nómina debe pasar por un proceso de #[b aprobación] antes de generar los pagos y registros definitivos. Esta etapa busca comprobar que los valores correspondan con la información previamente validada y que exista coherencia entre la nómina, los soportes, la PILA, los archivos de pago y los registros que posteriormente serán incorporados a la contabilidad.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img1.png', alt='').m-auto
          p.mb-0 El proceso también debe conservar la #[b trazabilidad de las operaciones] realizadas y proteger la información de los trabajadores. Los datos personales contenidos en la nómina deben manejarse mediante medidas técnicas, humanas y administrativas que eviten su pérdida, adulteración, consulta o acceso no autorizado, y las personas que intervienen en su tratamiento deben mantener la confidencialidad de la información. 
          Separador
          #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.1 Revisión, autorización y aprobación de la nómina
          p.mb-5 La #[b revisión de la nómina] consiste en comprobar que los datos y valores procesados correspondan con el periodo, los trabajadores, las novedades y los soportes previamente validados. Antes de autorizar el pago, se deben comparar los devengados, las deducciones, el neto por pagar y las obligaciones con terceros, prestando especial atención a las diferencias detectadas durante la prenómina.
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.png')})` }")
            .bloque-texto-g__texto.p-4
              p La autorización debe realizarse conforme a los niveles de responsabilidad definidos por la organización. Es conveniente que el registro de novedades, la revisión de los cálculos, la aprobación y la ejecución del pago puedan ser verificados por responsables diferentes, especialmente cuando el volumen de la nómina o la estructura organizacional lo permitan. Este control facilita identificar modificaciones no justificadas y conservar evidencia de quién revisó y aprobó cada etapa.
          p.mb-5 El valor aprobado debe coincidir con el monto que posteriormente se ordenará pagar. El Código Sustantivo del Trabajo establece que el salario en dinero debe pagarse por periodos iguales y vencidos, mientras que las horas extras y los recargos nocturnos deben pagarse con el salario del periodo en que se causaron o, a más tardar, con el salario del periodo siguiente (Código Sustantivo del Trabajo, 1950, art. 134). Los siguientes controles permiten comprobar la información antes de autorizar el pago definitivo:
          .bg___carrusel
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Periodo
                  p.mb-0.text-center Se deben confirmar las fechas de inicio, cierre y pago, de acuerdo con el calendario de nómina establecido por la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trabajadores
                  p.mb-0.text-center Se deben verificar los trabajadores activos, los ingresos y los retiros, con base en los reportes de personal y los contratos correspondientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Devengados
                  p.mb-0.text-center Se deben cotejar los salarios, los conceptos variables y las novedades con la prenómina y sus respectivos soportes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Deducciones
                  p.mb-0.text-center Se deben confirmar los descuentos aplicados y las autorizaciones correspondientes, mediante las órdenes, autorizaciones y registros disponibles.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguridad social
                  p.mb-0.text-center Se deben comparar las bases, los días y los aportes con la PILA preliminar, con el fin de identificar posibles diferencias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Neto por pagar
                  p.mb-0.text-center Se debe comprobar la operación entre el total devengado y las deducciones, y cotejar el resultado con el reporte de nómina.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Valores atípicos
                  p.mb-0.text-center Se deben analizar incrementos o disminuciones significativas mediante los reportes de excepciones o comparaciones con periodos anteriores.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Datos bancarios
                  p.mb-0.text-center Se deben confirmar las cuentas de los trabajadores y los cambios recientes, con base en certificaciones o registros bancarios validados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Totales
                  p.mb-0.text-center Se deben comparar los valores individuales y generales con el resumen de nómina para comprobar su consistencia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aprobación
                  p.mb-0.text-center Se deben registrar el responsable y la fecha de autorización mediante firma, flujo electrónico o registro del sistema.
      p.mb-5 La aplicación conjunta de estos controles permite sustentar la autorización de la nómina y conservar evidencia de la revisión efectuada.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa genera una nómina con un neto total de #[b $86.500.000]. Durante la revisión, se identifica que un trabajador presenta una comisión duplicada por #[b $450.000]. Antes de autorizar el pago, el valor debe corregirse y generarse nuevamente el total de la nómina:
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              h5.mb-0 $86.500.000 - $450.000 = $86.050.000
        p.mb-0 El nuevo valor de #[b $86.050.000] debe coincidir con el archivo que será remitido para pago y con los registros utilizados posteriormente en la contabilidad. La corrección debe quedar respaldada con la evidencia de la novedad, el cambio efectuado y la aprobación correspondiente.
      p.mb-0 La autorización definitiva confirma que los valores han superado los controles previstos y pueden pasar a la etapa de pago. Esta revisión disminuye el riesgo de transferir valores incorrectos y facilita la posterior generación de comprobantes, registros contables y conciliaciones.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Medios de pago y generación de comprobantes
      p El pago del salario debe realizarse directamente al trabajador o a la persona que este autorice por escrito. Salvo acuerdo diferente, debe efectuarse en el lugar donde presta sus servicios, durante la jornada o inmediatamente después de finalizarla. Estas disposiciones permiten utilizar medios como transferencia bancaria, depósito u otros mecanismos acordados, siempre que el pago pueda identificarse y verificarse (Código Sustantivo del Trabajo, 1950, arts. 138 y 139).
      p.mb-5 Antes de generar la orden de pago, el valor neto aprobado debe compararse con la información que será enviada a la entidad financiera o utilizada para realizar el desembolso. La identificación del trabajador, la cuenta de destino y el valor deben coincidir con la nómina definitiva, evitando que modificaciones posteriores alteren los valores previamente autorizados. Los siguientes controles permiten relacionar el beneficiario, el medio de pago y los soportes generados durante el desembolso: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Beneficiario
                  p.mb-0 Se debe confirmar la identificación del trabajador con base en la nómina aprobada y el documento de identificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuenta bancaria
                  p.mb-0 Se deben verificar la entidad financiera, el tipo y el número de cuenta mediante la certificación o el registro bancario validado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor neto
                  p.mb-0 Se debe comparar el valor que será desembolsado con el registrado en la nómina definitiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Archivo bancario
                  p.mb-0 Se deben cotejar la cantidad de trabajadores y los valores incluidos en el archivo de dispersión con la nómina aprobada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago en efectivo
                  p.mb-0 Cuando proceda, se deben registrar el valor entregado y la identificación del receptor mediante un comprobante firmado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago rechazado
                  p.mb-0 Se debe identificar la causa del rechazo y efectuar el seguimiento correspondiente mediante el reporte emitido por la entidad financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fecha de pago
                  p.mb-0 Se debe comprobar que el desembolso cumpla con el periodo establecido en el calendario de nómina.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comprobante individual
                  p.mb-0 Debe contener los devengados, las deducciones y el valor neto correspondiente al trabajador.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evidencia del desembolso
                  p.mb-0 Se debe confirmar que la operación fue procesada mediante extracto, reporte bancario o comprobante de la transacción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img21.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Estos controles permiten relacionar el valor liquidado con el beneficiario, el medio utilizado y la evidencia del pago.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Comprobante de pago
      p  El #[b comprobante individual] facilita al trabajador identificar los valores reconocidos y descontados durante el periodo. Como control, puede incluir el periodo #[b liquidado, el salario, los devengados variables, las deducciones, los aportes descontados y el valor neto pagado]. Esta información también facilita resolver diferencias y conciliar posteriormente los valores con los registros contables y bancarios.
      p.mb-5 Cuando el empleador se encuentra obligado a generar el #[b documento soporte de pago de nómina electrónica], debe reportar individualmente los valores devengados, deducidos y la diferencia resultante. Este documento tiene finalidad tributaria y debe generarse mensualmente para respaldar los costos y deducciones derivados de la relación laboral (DIAN).
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa aprueba la nómina de #[b 20 trabajadores] por un valor neto total de #[b $48.600.000.] Al generar el archivo bancario, el sistema arroja un total de #[b $48.450.000.] La diferencia se determina así:
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              h5.mb-0 $48.600.000 - $48.450.000 = $150.000
        p.mb-0 Antes de efectuar la transferencia, se debe comparar el archivo trabajador por trabajador para identificar el valor faltante. Una vez corregida la diferencia, el total del archivo bancario debe coincidir con el neto de la nómina aprobada.
      .bg___color_2
        .px-5
          p.mb-0 El pago se considera correctamente soportado cuando puede relacionarse el valor liquidado con el beneficiario, el medio utilizado y la evidencia de la operación. Estos soportes proporcionan la información necesaria para continuar con la contabilización de los gastos, las obligaciones y las provisiones de nómina.
          Separador
          #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.3 Contabilización de gastos, obligaciones y provisiones
          p.mb-5 La #[b contabilización de la nómina] permite reconocer los gastos derivados de los servicios prestados por los trabajadores y las obligaciones pendientes de pago. El marco contable colombiano establece que los beneficios a los empleados deben reconocerse como un pasivo cuando existe una obligación de pago y como un gasto cuando la entidad consume el servicio prestado por el trabajador, salvo que otra norma permita incorporarlo al costo de un activo (Decreto 2420 de 2015, anexos 1 y 2).
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img22.png', alt='').m-auto
            .col-xl
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 Los salarios, aportes a seguridad social, vacaciones y demás beneficios causados deben registrarse en el periodo en que el trabajador presta el servicio, aunque algunos valores se paguen posteriormente. De esta manera, la contabilidad refleja tanto el gasto del periodo como las obligaciones pendientes con trabajadores, administradoras y otros terceros (Decreto 2420 de 2015, Anexo 2).
              .box___style_1(data-aos="fade-left")
                p.mb-0 En la práctica de nómina suele utilizarse la expresión #[b provisión] para referirse al reconocimiento periódico de vacaciones y prestaciones sociales causadas. Contablemente, estos valores corresponden a beneficios a los empleados y deben reconocerse conforme al marco técnico aplicable a la entidad. Los beneficios de corto plazo comprenden, entre otros, salarios, aportes a seguridad social y ausencias remuneradas que se espera liquidar dentro de los doce meses siguientes. 
          p.mb-5 Los siguientes conceptos permiten relacionar los valores liquidados con su reconocimiento general y con las obligaciones que deben registrarse: 
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Salarios y remuneraciones
                      p.mb-0 Se reconocen como gasto por beneficios a empleados y generan una obligación por el valor neto pendiente de pago al trabajador.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aportes del trabajador
                      p.mb-0 Corresponden a valores descontados de la nómina y generan una cuenta por pagar a las administradoras correspondientes.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img24.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aportes del empleador
                      p.mb-0 Se reconocen como gasto de seguridad social o beneficio laboral y generan una cuenta por pagar a las administradoras.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img25.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aportes parafiscales
                      p.mb-0 Se reconocen como el gasto correspondiente y generan una cuenta por pagar a las entidades beneficiarias.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Prima de servicios
                      p.mb-0 Se reconoce como gasto causado durante el periodo y como un beneficio a empleados pendiente de pago.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Cesantías
                      p.mb-0 Se reconocen como gasto causado durante el periodo y como un beneficio a empleados pendiente de pago o consignación.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Intereses sobre cesantías
                      p.mb-0 Se reconocen como gasto causado y generan una obligación pendiente de pago al trabajador.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Vacaciones
                      p.mb-0 Se reconocen como gasto conforme se causa el derecho y generan un beneficio a empleados pendiente de disfrute o pago.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img30.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Retenciones y deducciones
                      p.mb-0 No constituyen un gasto adicional de nómina. Corresponden a valores retenidos que generan una cuenta por pagar al tercero beneficiario.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img31.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Pago de nómina
                      p.mb-0 Cancela la obligación previamente reconocida y genera una disminución de los recursos en bancos y de las cuentas por pagar.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t4/img32.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La denominación y codificación de las cuentas depende del marco contable, las políticas y el plan de cuentas utilizado por cada organización. El reconocimiento debe atender a la NIC 19 y a la Sección 28 del marco técnico compilado por el Decreto 2420 de 2015.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa presenta los siguientes valores en su nómina:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Salarios y demás devengados:] $20.000.000. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Deducciones a los trabajadores:] $2.500.000. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Aportes y obligaciones a cargo del empleador:] $4.000.000. 
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small El neto por pagar a los trabajadores se determina así:
              h5.mb-0 $20.000.000 - $2.500.000 = $17.500.000
        p.mb-0 De manera general, el registro reconoce el gasto correspondiente a los beneficios causados, las obligaciones con los trabajadores por #[b $17.500.000], las obligaciones con terceros derivadas de los descuentos por #[b $2.500.000] y los aportes patronales por #[b $4.000.000]. Cuando posteriormente se realizan los pagos, se disminuyen las cuentas por pagar y los recursos disponibles en bancos.
      p.mb-0 Antes de contabilizar, los valores deben coincidir con la nómina aprobada, la PILA y los demás soportes del periodo. Esta verificación facilita que los gastos y obligaciones registrados puedan ser conciliados posteriormente con los pagos realizados y con los saldos contables.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Conciliación entre nómina, PILA, contabilidad y bancos
      p La #[b conciliación] consiste en comparar los valores generados en la nómina con los reportados y registrados en los demás procesos asociados. Su propósito es comprobar que los devengados, las deducciones, los aportes, las obligaciones y los pagos correspondan al mismo periodo y que las diferencias identificadas tengan una explicación y un soporte.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___1.fit___box_1(data-aos="fade-right")
            p.mb-0 La información de la PILA debe cotejarse con los trabajadores, las novedades, los días cotizados y los ingresos base de cotización registrados en la nómina. La Resolución 2388 de 2016 establece las reglas y estructuras utilizadas para liquidar y pagar los aportes al Sistema de Seguridad Social Integral y los parafiscales (Resolución 2388 de 2016).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img33.png', alt='' style="max-width: 380px").m-auto
      p.mb-5 Los registros contables también deben coincidir con los gastos y obligaciones causados en la nómina. El marco técnico contable exige reconocer un pasivo cuando el trabajador ha prestado servicios a cambio de beneficios que serán pagados posteriormente y reconocer el gasto asociado al servicio recibido. Por ello, las diferencias entre la nómina y la contabilidad deben revisarse antes del cierre del periodo (Decreto 2420 de 2015, Anexo 1). Los siguientes cruces permiten comprobar la consistencia de la información y determinar las acciones requeridas cuando existan diferencias: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nómina – PILA
                  p.mb-0 Se deben comparar trabajadores, días, novedades, IBC y aportes. Ante diferencias en días, bases o administradoras, se debe revisar la novedad y corregir el reporte cuando corresponda.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nómina – contabilidad
                  p.mb-0 Se deben cotejar salarios, aportes, prestaciones y deducciones. Si existe un gasto u obligación registrada por un valor diferente, se debe revisar el comprobante contable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nómina – bancos
                  p.mb-0 Se deben comparar el neto aprobado y los valores transferidos. Ante pagos omitidos, rechazados o duplicados, se debe identificar al trabajador y corregir el desembolso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nómina – pagos a terceros
                  p.mb-0 Se deben cotejar retenciones, libranzas, embargos y demás descuentos. Si un valor fue descontado, pero no transferido, se deben verificar el beneficiario y el comprobante de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nómina – nómina electrónica
                  p.mb-0 Se deben comparar los devengados, las deducciones y la diferencia resultante. Si los valores transmitidos son distintos de los registrados en la nómina definitiva, se debe analizar si procede una nota de ajuste.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img38.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La conciliación permite relacionar los diferentes reportes y registros asociados con el mismo periodo y documentar las diferencias antes del cierre definitivo.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa presenta los siguientes valores al cierre del periodo:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Neto de nómina aprobado:] $52.800.000. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Archivo bancario pagado:] $52.500.000. 
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small La diferencia se determina así:
              h5.mb-0 $52.800.000 - $52.500.000 = $300.000
        p.mb-0 La conciliación permite identificar que el pago de un trabajador por #[b $300.000] fue rechazado por la entidad financiera. En este caso, la nómina no debe modificarse si el valor liquidado era correcto; debe registrarse la obligación pendiente y efectuarse posteriormente el pago al trabajador, conservando el soporte de la operación.
      p.mb-0 En síntesis, la conciliación permite comprobar que lo liquidado, contabilizado, reportado y pagado corresponda con la misma información. Las diferencias deben identificarse, documentarse y corregirse antes del cierre definitivo del periodo.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Nómina electrónica y reportes del periodo
      p.mb-5 El #[b documento soporte de pago de nómina electrónica] permite respaldar fiscalmente los costos y deducciones derivados de una relación laboral, legal y reglamentaria o del pago de pensiones a cargo del empleador. Está conformado por los valores devengados, los valores deducidos y la diferencia resultante, y debe generarse de manera individual por cada beneficiario del pago. La regulación se encuentra actualmente compilada en la #[b Resolución DIAN 000227 de 2025] (DIAN, 2025).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-8
          .box___color-text-imgleft.color___5(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img39.png', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 La información se genera mensualmente, independientemente de que la organización pague la nómina de forma semanal, quincenal o con otra periodicidad. Los sujetos obligados deben transmitirla para validación de la DIAN dentro de los diez primeros días del mes siguiente al que corresponde el pago o abono en cuenta (DIAN).
      p.mb-5 Antes de efectuar la transmisión, los valores deben compararse con la nómina definitiva para comprobar que los trabajadores, devengados, deducciones y totales coincidan. Si posteriormente se identifica un error en un documento transmitido, la regulación contempla #[b notas de ajuste] para corregir la información correspondiente. Los siguientes reportes permiten relacionar la información generada al cierre del periodo con los controles requeridos antes de finalizar el proceso: 
      .row.justify-content-center.mb-3
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img40.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Nómina definitiva
              p.mb-0.text-center Contiene los devengados, las deducciones y el neto por trabajador. Se debe confirmar que corresponda con la nómina aprobada.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img41.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Documento soporte de nómina electrónica
              p.mb-0.text-center Contiene los devengados, las deducciones y la diferencia resultante. Se debe comparar con la nómina definitiva antes de transmitirlo.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img42.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Nota de ajuste
              p.mb-0.text-center Permite corregir la información de un documento previamente transmitido. Se deben identificar el documento afectado y la causa del ajuste.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img43.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center PILA
              p.mb-0.text-center Contiene los días, las novedades, los ingresos base de cotización y los aportes. Se debe conciliar con las bases y novedades registradas en la nómina.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img44.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reporte bancario
              p.mb-0.text-center Contiene los valores efectivamente transferidos. Se debe comparar con el neto autorizado.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img45.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Comprobante contable
              p.mb-0.text-center Registra los gastos, las obligaciones y los pagos. Se debe cotejar con los totales de nómina.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reporte de terceros
              p.mb-0.text-center Contiene retenciones, embargos, libranzas y demás pagos. Se deben verificar los valores descontados y transferidos.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img47.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Resumen del periodo
              p.mb-0.text-center Consolida los totales y las variaciones de la nómina. Se deben identificar y sustentar las diferencias frente al periodo anterior.
      p.mb-5 La revisión conjunta de estos reportes permite comprobar la consistencia entre la nómina definitiva, la PILA, los pagos, la contabilidad y la información transmitida a la DIAN.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa cierra la nómina mensual con los siguientes valores para una trabajadora:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Total devengado:] $3.200.000. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Total deducido:] $320.000. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Neto:] $2.880.000. 
        p.mb-0 Si antes de transmitir se detecta que una comisión por #[b $200.000] fue omitida, primero debe corregirse la nómina definitiva y, posteriormente, generar el documento con los valores actualizados. Si el documento ya fue transmitido y validado, debe analizarse la generación de la respectiva #[b nota de ajuste].
      p En conclusión, la nómina electrónica y los demás reportes del periodo permiten relacionar la información liquidada con los valores reportados, contabilizados y pagados. Su revisión conjunta facilita cerrar el proceso con datos consistentes y proporciona la base para gestionar posteriormente errores, reliquidaciones y correcciones.
      p.mb-5 El pago y la contabilización de la nómina requieren comprobar que los valores aprobados coincidan con los desembolsos, los registros contables, la PILA y los reportes electrónicos. La conciliación permite identificar oportunamente diferencias y mantener la trazabilidad de las operaciones antes del cierre definitivo del periodo.
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img48.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Ajustes, soportes y conservación de información
            p.mb-0 Se invita a leer el documento “#[b Anexo 1]”, donde se aborda la gestión de #[b ajustes, correcciones y conservación de la información de nómina], incluyendo errores y diferencias de pago, reliquidaciones, retroactivos, trazabilidad, archivo documental y copias de seguridad.
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_01_Ajustes_soportes_conservacion_informacion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
