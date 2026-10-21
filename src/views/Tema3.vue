<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Deducciones y pagos a terceros
      .bg___color_2
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_1.fit___box_4(data-aos="fade-right")
                p.mb-0 Las deducciones son valores que disminuyen el total devengado para determinar el neto que recibe el trabajador. Su aplicación debe estar respaldada por una disposición legal, una orden judicial o una autorización válida, debido a que el empleador no puede descontar sumas del salario de manera unilateral (Código Sustantivo del Trabajo, 1950, art. 149).
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
          p.mb-0 Los valores deducidos deben identificarse por concepto, beneficiario y periodo. Posteriormente, se remiten a las entidades de seguridad social, fondos, autoridades judiciales, administraciones tributarias y demás terceros correspondientes. Este procedimiento permite diferenciar los descuentos asumidos por el trabajador de los aportes y obligaciones que se encuentran a cargo del empleador.
          Separador
          #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.1 Aportes descontados al trabajador
          p.mb-5 Los trabajadores dependientes vinculados al régimen general participan en la financiación de los sistemas de salud y pensiones mediante aportes calculados sobre el ingreso base de cotización (IBC). El empleador debe descontar la parte correspondiente al trabajador, adicionar el valor que se encuentra a su cargo y efectuar el pago mediante la Planilla Integrada de Liquidación de Aportes (PILA) dentro de los plazos establecidos (Ley 100 de 1993).
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_5(data-aos="fade-right")
                p.mb-0 En salud, la cotización total corresponde al 12,5 % del ingreso base de cotización. El trabajador aporta el 4 % y el empleador asume el 8,5 %, sin perjuicio de las exoneraciones que puedan aplicarse al empleador en situaciones específicas (Ley 100 de 1993).
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img2.png', alt='').m-auto
            .col-xl.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
              p.mb-0 En pensiones, la cotización total corresponde al 16 % del ingreso base de cotización. Para los trabajadores dependientes, el empleador asume el 75 % de la cotización, equivalente al 12 %, y el trabajador aporta el 25 % restante, equivalente al 4 %.
          p.mb-5 Para este contenido se mantienen las reglas del Sistema General de Pensiones previstas en las leyes 100 de 1993 y 797 de 2003, debido a que la Corte Constitucional suspendió la entrada en vigencia general de la Ley 2381 de 2024 hasta que adopte una decisión definitiva, salvo las disposiciones expresamente exceptuadas. Los siguientes aportes permiten diferenciar los valores descontados al trabajador de aquellos asumidos por el empleador, junto con sus bases y controles generales:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aporte a salud
                      p.mb-0 Se calcula sobre el IBC de salud. El trabajador aporta el 4 % y el empleador, el 8,5 %. Se deben verificar los días, las novedades y el ingreso base de cotización.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aporte a pensión
                      p.mb-0 Se calcula sobre el IBC de pensión. El trabajador aporta el 4 % y el empleador, el 12 %. Se deben confirmar la afiliación, los días y el ingreso base de cotización.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Fondo de Solidaridad Pensional
                      p.mb-0 Se aplica cuando el IBC de pensión es igual o superior a cuatro salarios mínimos mensuales legales vigentes. El aporte del trabajador comienza en el 1 %, según el rango de ingresos; no corresponde un aporte adicional del empleador. Se debe revisar la totalidad de ingresos del afiliado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Riesgos laborales
                      p.mb-0 Se calcula sobre el IBC de riesgos laborales y no se descuenta al trabajador dependiente. Está a cargo del empleador, según la clase de riesgo. Se deben verificar el centro de trabajo y la tarifa aplicable.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Caja de compensación familiar
                      p.mb-0 Se calcula sobre la nómina o base parafiscal correspondiente. No se descuenta al trabajador y está a cargo del empleador. Se deben verificar la obligación y la base aplicable.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 SENA e ICBF
                      p.mb-0 Se calculan sobre la nómina o base parafiscal correspondiente. No se descuentan al trabajador y están a cargo del empleador cuando proceda. Se deben revisar las exoneraciones y la obligación aplicable.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La separación de estos aportes permite identificar qué valores afectan el neto del trabajador y cuáles constituyen obligaciones propias del empleador (Ley 100 de 1993, arts. 20, 22 y 204; Ley 797 de 2003, art. 7).
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Fondo de Solidaridad Pensional
      p  Los afiliados que tengan un ingreso mensual igual o superior a cuatro salarios mínimos mensuales legales vigentes (SMLMV) deben efectuar un aporte adicional del 1 % sobre el ingreso base de cotización con destino al Fondo de Solidaridad Pensional. Cuando el ingreso es igual o superior a dieciséis salarios mínimos, se aplica además una contribución adicional progresiva de entre el 0,2 % y el 1 %, según el rango correspondiente (Ley 797 de 2003, art. 8).
      p.mb-5 Los siguientes rangos integran el aporte básico del 1 % y la contribución adicional aplicable a los ingresos iguales o superiores a dieciséis salarios mínimos.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Aportes al Fondo de Solidaridad Pensional según el ingreso base de cotización
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Ingreso base de cotización
                  th.texto-left Aporte total al Fondo de Solidaridad Pensional
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Desde 4 y menos de 16 SMLMV
                  td.texto-left 1 % del ingreso base de cotización.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Desde 16 y hasta 17 SMLMV
                  td.texto-left 1,2 %, integrado por el aporte básico del 1 % y una contribución adicional del 0,2 %.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Más de 17 y hasta 18 SMLMV
                  td.texto-left 1,4 %, integrado por el aporte básico del 1 % y una contribución adicional del 0,4 %.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Más de 18 y hasta 19 SMLMV
                  td.texto-left 1,6 %, integrado por el aporte básico del 1 % y una contribución adicional del 0,6 %.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Más de 19 y hasta 20 SMLMV
                  td.texto-left 1,8 %, integrado por el aporte básico del 1 % y una contribución adicional del 0,8 %.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Superior a 20 SMLMV
                  td.texto-left 2 %, integrado por el aporte básico del 1 % y una contribución adicional del 1 %.
      p.mb-5 La aplicación del porcentaje requiere identificar el rango de ingresos del afiliado y calcular el aporte sobre el IBC correspondiente.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador presenta un ingreso base de cotización de $3.000.000. Como su ingreso es inferior a cuatro salarios mínimos, no está sujeto al aporte adicional al Fondo de Solidaridad Pensional.
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Aporte del trabajador a salud
              h5.mb-0 $3.000.000 × 4 % = $120.000
          .col-6
            .box___style_5
              p.mb-0.text-small Aporte del trabajador a pensión
              h5.mb-0 $3.000.000 × 4 % = $120.000
        .row.align-items-center.mb-0
          .col-6
            .box___style_5
              p.mb-0.text-small Total descontado por seguridad social
              h5.mb-0 $120.000 + $120.000 = $240.000
      p El empleador debe descontar los $240.000 en la nómina, adicionar los aportes que se encuentran a su cargo y pagar la totalidad mediante la PILA. La responsabilidad del empleador subsiste incluso cuando no haya efectuado oportunamente el descuento al trabajador (Ley 100 de 1993).
      p.mb-0 En conclusión, los aportes descontados deben calcularse sobre el IBC correcto y mantenerse separados de las obligaciones exclusivas del empleador. Esta diferenciación permite determinar adecuadamente el neto pagado y preparar la información que será registrada en la PILA.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Retenciones, embargos y deducciones autorizadas
      p.mb-5 A continuación, se presenta un pódcast sobre los principales descuentos y deducciones aplicables al salario, su origen, los límites legales y los soportes requeridos para su correcta aplicación en la nómina.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img9.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Descuentos y deducciones aplicables al salario&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img10.png" style="max-width: 510px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Libranzas y descuentos directos
      p.mb-5 La libranza permite que el empleador descuente de la nómina las cuotas autorizadas por el trabajador y las transfiera directamente a la entidad operadora. Después de aplicar los descuentos de ley, el trabajador debe conservar por lo menos el 50 % del valor neto de su salario.
      .box___style_3(data-aos="zoom-in").mb-0
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Después de descontar los aportes obligatorios y demás conceptos legales, un trabajador tiene un salario neto de $2.000.000. Para una operación de libranza, debe conservar como mínimo:
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              h5.mb-0 $2.000.000 × 50 % =$1.000.000
        p En consecuencia, la suma de las cuotas de libranza no podría superar $1.000.000 durante el periodo, porque el trabajador debe recibir al menos el otro 50 % de su salario neto. Antes de aplicar la cuota, se deben verificar la autorización, el saldo de la obligación, la entidad beneficiaria y la vigencia del descuento.
        p.mb-0 En conclusión, cada deducción debe registrarse de manera independiente, indicando su origen, beneficiario, valor y soporte. Este control evita descuentos indebidos y permite remitir correctamente los recursos retenidos a las autoridades, entidades financieras y demás terceros.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Aportes patronales y parafiscales
      p Además de los valores descontados al trabajador, el empleador debe asumir aportes propios asociados con la nómina. Entre ellos se encuentran la participación patronal en salud y pensión, los aportes al Sistema General de Riesgos Laborales y los aportes parafiscales destinados a las cajas de compensación familiar, el SENA y el ICBF, cuando exista la obligación de realizarlos.
      .bg___color_2
        .px-5
          .row.justify-content-center.align-items-center.mb-3
            .col-xl.mb-4.mb-lg-0
              .box___color-text-imgleft.color___3(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 400px").m-auto
                  .col-xl.fit___box_container
                    p.mb-0 En salud, la cotización total corresponde al 12,5 % del ingreso base de cotización: el 8,5 % está a cargo del empleador y el 4 % corresponde al trabajador. Sin embargo, determinados empleadores pueden estar exonerados de efectuar el aporte patronal de salud respecto de trabajadores que devenguen menos de diez salarios mínimos mensuales legales vigentes (Ley 1122 de 2007).
              p.mb-0 En pensiones, la cotización general corresponde al 16 % del ingreso base de cotización. El empleador asume el 75 % de la cotización, equivalente al 12 %, mientras que el trabajador aporta el 4 %. Para este contenido se mantienen estas reglas, debido a que la entrada en vigencia general de la Ley 2381 de 2024 continúa suspendida mientras la Corte Constitucional adopta una decisión definitiva sobre su constitucionalidad (Ley 797 de 2003).
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img12.png', alt='' style="width: 320px").m-auto
          p Los aportes a riesgos laborales son asumidos por el empleador y se determinan según la clase de riesgo de la actividad. Como tarifas iniciales de referencia se aplican 0,522 % para riesgo I; 1,044 % para riesgo II; 2,436 % para riesgo III; 4,350 % para riesgo IV y 6,960 % para riesgo V. La cotización puede variar dentro de los límites establecidos para cada clase de riesgo (Ley 1562 de 2012).
          p.mb-5 Los aportes parafiscales generales corresponden al 4 % para las cajas de compensación familiar, 2 % para el SENA y 3 % para el ICBF, calculados sobre la nómina mensual de salarios conforme con las normas aplicables. La exoneración establecida en el artículo 114-1 del Estatuto Tributario puede cubrir los aportes al SENA y al ICBF, pero no elimina el aporte del 4 % a la caja de compensación familiar. Los siguientes conceptos permiten identificar los porcentajes generales, las bases y las condiciones que deben revisarse antes de liquidar los aportes a cargo del empleador: 
          .row.justify-content-center.mb-3
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img13.png', alt="" ).m-auto
                  h4.text-center Salud
                  .box___card_sinbordes_p
                    p.mb-0.text-center El aporte general del empleador es del 8,5 % sobre el IBC de salud. Puede existir exoneración según el artículo 114-1 del Estatuto Tributario.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img14.png', alt="" ).m-auto
                  h4.text-center Pensión
                  .box___card_sinbordes_p
                    p.mb-0.text-center El aporte general del empleador es del 12 % sobre el IBC de pensión. Corresponde al 75 % de la cotización total.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img15.png', alt="" ).m-auto
                  h4.text-center Riesgos laborales
                  .box___card_sinbordes_p
                    p.mb-0.text-center El aporte está a cargo del empleador y se calcula sobre el IBC de riesgos laborales. La tarifa depende de la clasificación del riesgo.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img16.png', alt="" ).m-auto
              h4.text-center Caja de compensación familiar
              .box___card_sinbordes_p
                p.mb-0.text-center El aporte general es del 4 % sobre la nómina mensual de salarios. No está incluido en la exoneración del artículo 114-1 del Estatuto Tributario.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
              h4.text-center SENA
              .box___card_sinbordes_p
                p.mb-0.text-center El aporte general es del 2 % sobre la nómina mensual de salarios. Puede existir exoneración cuando se cumplan las condiciones aplicables.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
              h4.text-center ICBF
              .box___card_sinbordes_p
                p.mb-0.text-center El aporte general es del 3 % sobre la nómina mensual de salarios. Puede existir exoneración cuando se cumplan las condiciones aplicables.
      p.mb-5 La liquidación de estos aportes debe atender a las normas que regulan cada obligación y a las condiciones particulares del empleador (Ley 1122 de 2007; Ley 797 de 2003; Ley 1562 de 2012; Ley 21 de 1982; Ley 89 de 1988; Estatuto Tributario, art. 114-1).
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Exoneración de aportes
      p.mb-5 Las sociedades y personas jurídicas contribuyentes declarantes del impuesto sobre la renta pueden estar exoneradas de los aportes patronales a salud, SENA e ICBF respecto de trabajadores que individualmente devenguen menos de diez salarios mínimos mensuales legales vigentes. La norma también contempla la exoneración para personas naturales empleadoras, excepto cuando tengan menos de dos trabajadores. Antes de omitir un aporte, se debe comprobar que el empleador y el trabajador cumplan todas las condiciones previstas.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa que no se encuentra exonerada liquida aportes sobre un IBC de $3.000.000 para un trabajador clasificado inicialmente en riesgo I. Los valores a cargo del empleador se determinan así:
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Pensión
              h5.mb-0 $3.000.000 × 12 % = $360.000
          .col-6
            .box___style_5
              p.mb-0.text-small Salud
              h5.mb-0 $3.000.000 × 8,5 % = $255.000
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Riesgos laborales
              h5.mb-0 $3.000.000 × 0,522 % = $15.660
          .col-6
            .box___style_5
              p.mb-0.text-small Caja de compensación
              h5.mb-0 $3.000.000 × 4 % = $120.000
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small SENA
              h5.mb-0 $3.000.000 × 2 % = $60.000
          .col-6
            .box___style_5
              p.mb-0.text-small ICBF
              h5.mb-0 $3.000.000 × 3 % = $90.000
        .box___style_5
          p.mb-0.text-small Total de aportes a cargo del empleador
          h5.mb-0 $360.000 + $255.000 + $15.660 + $120.000 + $60.000 + $90.000 = $900.660
      p Si el empleador cumple las condiciones de exoneración previstas en el artículo 114-1 del Estatuto Tributario, deberá revisar cuáles de estos conceptos no se generan para ese trabajador. La exoneración no debe aplicarse automáticamente a todos los aportes ni a todos los trabajadores.
      p.mb-0 En conclusión, los aportes patronales deben liquidarse separadamente de los descuentos efectuados al trabajador y verificarse según la base, la tarifa, la clase de riesgo y las posibles exoneraciones. Esta información será posteriormente cotejada y pagada mediante la Planilla Integrada de Liquidación de Aportes.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Planilla Integrada de Liquidación de Aportes
      p La Planilla Integrada de Liquidación de Aportes (PILA) es la herramienta mediante la cual los aportantes reportan y pagan de forma integrada los aportes al Sistema de Seguridad Social Integral y los parafiscales. La responsabilidad sobre la exactitud de los datos reportados corresponde al aportante, quien debe suministrar la información del trabajador, el periodo, los días, las novedades y los ingresos base de cotización aplicables.
      p.mb-5 La Resolución 2388 de 2016 unificó las reglas para el recaudo mediante la PILA y adoptó sus anexos técnicos. Para trabajadores activos, el Anexo Técnico 2 establece la estructura de los archivos y los campos utilizados para identificar aportantes, cotizantes, administradoras, días, novedades, salarios e ingresos base de cotización. Este anexo ha sido actualizado posteriormente, por lo que debe consultarse su versión vigente al momento del reporte. Los siguientes controles permiten cotejar los datos de la nómina y la planilla antes de realizar el pago de los aportes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación del cotizante
                  p.mb-0 Se deben comparar el tipo y el número de documento. Este control permite identificar trabajadores duplicados o registrados incorrectamente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Periodo de cotización
                  p.mb-0 Se deben confirmar el mes y el año reportados. La verificación evita que el pago se aplique a un periodo diferente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Administradoras
                  p.mb-0 Se deben revisar la EPS, la administradora de pensiones, la ARL y la caja de compensación. El control evita dirigir aportes a una entidad incorrecta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Días cotizados
                  p.mb-0 Se deben comparar los días con el ingreso, el retiro y las demás novedades. Así se identifican diferencias por un número mayor o menor de días.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Novedades
                  p.mb-0 Se deben verificar el ingreso, retiro, incapacidad, licencia, vacaciones y variación salarial. El control permite identificar novedades omitidas o reportadas incorrectamente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 IBC
                  p.mb-0 Se deben cotejar las bases de salud, pensión, riesgos y caja de compensación. Las diferencias entre nómina y PILA deben contar con justificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tarifas
                  p.mb-0 Se deben verificar los porcentajes aplicables. Esta revisión permite identificar aportes calculados con una tarifa incorrecta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aportes
                  p.mb-0 Se deben comparar los valores correspondientes al trabajador y al empleador. El control permite identificar diferencias frente a la nómina.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Total por pagar
                  p.mb-0 Se debe cotejar el valor total de la planilla con los aportes liquidados. Así se identifican diferencias antes de efectuar el pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soporte de pago
                  p.mb-0 Se debe confirmar que la transacción fue procesada. Este control permite diferenciar una planilla liquidada de una efectivamente pagada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa liquida para un trabajador un IBC de salud y pensión de $3.000.000 por treinta días. Al revisar la PILA, encuentra que el sistema reporta únicamente veinte días y un IBC de $2.000.000. Antes de efectuar el pago, debe verificar si existe una novedad de ingreso, retiro, suspensión o licencia que justifique la diferencia. Si no existe soporte, los datos deben corregirse para que la planilla refleje las condiciones reales del periodo. La responsabilidad sobre la información suministrada mediante la PILA corresponde al aportante.
        p.mb-0 Los operadores de información facilitan la liquidación y el pago de la planilla y disponen de canales para su procesamiento. Una vez efectuado el pago, se deben conservar la planilla y el comprobante generado, debido a que estos documentos permiten acreditar los aportes realizados y facilitan las posteriores conciliaciones con la nómina y la contabilidad.
      p.mb-0 En conclusión, la PILA debe revisarse como parte del control de nómina y no únicamente como un mecanismo de pago. La correspondencia entre trabajadores, novedades, días, bases y aportes permite remitir correctamente los recursos a las administradoras y demás entidades del sistema.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Pagos a administradoras y demás terceros
      p Los valores liquidados por concepto de seguridad social y aportes parafiscales deben ser remitidos a las entidades correspondientes mediante la PILA. El pago comprende los aportes a salud, pensión, riesgos laborales, cajas de compensación familiar, SENA e ICBF, según las obligaciones aplicables al empleador. Los plazos se determinan de acuerdo con los dos últimos dígitos del NIT o documento de identificación del aportante (Decreto 1990 de 2016).
      p.mb-5 El pago a terceros también comprende los valores retenidos por concepto de obligaciones tributarias, embargos, libranzas y otras deducciones válidamente aplicadas. Cada concepto debe conservarse separado en la nómina e identificar claramente el beneficiario, el valor, el periodo y el soporte que origina la transferencia. Los siguientes beneficiarios reciben los valores retenidos o causados durante el proceso de nómina, de acuerdo con el concepto y el procedimiento aplicable: 
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img29.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="EPS").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe los aportes a salud mediante la PILA. Antes del pago, se deben verificar la afiliación, el IBC, los días y las novedades.
            .row(titulo="Administradora de pensiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe los aportes a pensión y al Fondo de Solidaridad Pensional cuando corresponda, mediante la PILA. Se deben cotejar el IBC, la tarifa y la administradora.
            .row(titulo="ARL").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe los aportes a riesgos laborales mediante la PILA. Se deben confirmar la clase de riesgo, la tarifa y los días.
            .row(titulo="Caja de compensación familiar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe el aporte parafiscal mediante la PILA. Se deben verificar la base y la entidad de afiliación.
            .row(titulo="").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="SENA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe el aporte parafiscal mediante la PILA cuando exista obligación. Se deben revisar la base y la exoneración aplicable.
            .row(titulo="ICBF").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe el aporte parafiscal mediante la PILA cuando exista obligación. Se deben revisar la base y la exoneración aplicable.
            .row(titulo="DIAN").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe las retenciones en la fuente practicadas mediante la declaración y el pago tributario. Se deben conciliar los valores retenidos con la declaración.
            .row(titulo="Despacho judicial o beneficiario indicado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe los valores correspondientes a embargos, según el procedimiento señalado en la orden judicial. Se deben confirmar el proceso, el beneficiario y el valor retenido.
            .row(titulo="Entidad operadora de libranza").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibe las cuotas descontadas mediante transferencia directa. Se deben verificar la autorización, el saldo y el operador.
            .row(titulo="Otros terceros autorizados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reciben cuotas, préstamos u otros descuentos, según la autorización o el acuerdo aplicable. Se deben confirmar el beneficiario, el valor y el soporte.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img12.png", alt="" style="width: 350px").m-auto
      p.mb-5 La identificación de cada beneficiario permite conciliar los valores previamente liquidados y aplicar el procedimiento de pago correspondiente. Los aportes a seguridad social y parafiscales se pagan mediante la PILA conforme al Decreto 1990 de 2016.
      .box___color-text-imgleft.color___4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img30.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p Las retenciones en la fuente practicadas sobre los pagos laborales deben ser declaradas y consignadas por el agente retenedor dentro de los lugares y plazos fijados por el Gobierno Nacional. La declaración de retenciones es mensual, por lo que los valores descontados en la nómina deben conciliarse con los registros tributarios antes de su presentación y pago (Estatuto Tributario, arts. 376 y 382).
            p.mb-0 En las libranzas, el empleador o entidad pagadora debe trasladar a la entidad operadora las cuotas descontadas dentro de los tres días hábiles siguientes al pago realizado al trabajador. También debe verificar que la entidad operadora se encuentre inscrita en el registro correspondiente (Ley 1527 de 2012, art. 6).
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa determina para el periodo los siguientes valores pendientes de transferencia:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Aportes de seguridad social y parafiscales mediante PILA: $8.500.000.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Retenciones en la fuente: $1.200.000.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cuotas de libranza: $750.000.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Embargos judiciales: $400.000.
        .row.align-items-center.mb-0
          .col-6
            .box___style_5
              p.mb-0.text-small El total de pagos a terceros se calcula así:
              h5.mb-0 $8.500.000 + $1.200.000 + $750.000 + $400.000 = $10.850.000
      p.mb-5 Antes de efectuar las transferencias, se deben comparar estos valores con la nómina definitiva, la PILA, la declaración tributaria, las órdenes judiciales y las autorizaciones de descuento. Cada pago debe conservar su comprobante para facilitar posteriormente la conciliación entre nómina, contabilidad, bancos y terceros.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img31.png')})` }")
        .bloque-texto-g__texto.p-4
          p En conclusión, los valores descontados o causados en la nómina no terminan con el cálculo del trabajador. Su correcta remisión a las administradoras, autoridades y demás beneficiarios permite cerrar las obligaciones del periodo y proporciona los soportes necesarios para el proceso de pago, contabilización y conciliación de la nómina.
      p.mb-0 La correcta gestión de las deducciones y los pagos a terceros exige identificar el origen de cada descuento, aplicar las bases y tarifas correspondientes y remitir oportunamente los valores a las entidades beneficiarias. La conciliación entre nómina, PILA, retenciones, embargos, libranzas y demás obligaciones permite cerrar el periodo con información verificable y preparar el proceso de pago y contabilización.

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/Podcast_Diseno_liquidacion_nomina.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
