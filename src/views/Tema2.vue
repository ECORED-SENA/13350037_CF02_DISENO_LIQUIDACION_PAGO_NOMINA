<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Liquidación de devengados y novedades
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La liquidación de devengados consiste en determinar los valores que el trabajador tiene derecho a recibir durante un periodo, de acuerdo con el salario pactado, el tiempo laborado y las novedades presentadas. Estos valores pueden comprender salario básico, comisiones, bonificaciones salariales, horas extras, recargos, auxilios, incapacidades, licencias, vacaciones y prestaciones sociales, según corresponda. El Código Sustantivo del Trabajo establece que constituye salario toda remuneración fija o variable recibida como contraprestación directa del servicio (Ley 50 de 1990).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='').m-auto
      p.mb-0 Cada concepto debe liquidarse de forma independiente, utilizando la base, los días, las horas y los porcentajes aplicables. También se debe verificar la vigencia de la novedad, su soporte y su efecto sobre el ingreso base de cotización, las prestaciones sociales y el valor neto pagado. Esta separación facilita revisar la prenómina y relacionar posteriormente los devengados con las deducciones, los aportes y los reportes del periodo (Código Sustantivo del Trabajo, 1950).
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Salario y remuneración variable
      p.mb-5 El salario es la remuneración que recibe el trabajador como contraprestación directa del servicio. Puede pactarse por unidad de tiempo, por obra, a destajo, por tarea o mediante otras modalidades, siempre que se respete el salario mínimo legal o el establecido en pactos, convenciones colectivas o fallos arbitrales (Ley 50 de 1990).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_3(data-aos="fade-right")
            p.mb-0 El salario puede ser fijo o variable. Es fijo cuando el trabajador recibe periódicamente un valor previamente determinado. Es variable cuando su valor depende de resultados o hechos que pueden cambiar entre periodos, como las ventas realizadas, las unidades producidas, las metas alcanzadas, las comisiones o los porcentajes acordados.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Las comisiones, los porcentajes sobre ventas, las bonificaciones habituales y los demás pagos que remuneran directamente el servicio forman parte del salario, independientemente del nombre utilizado por la organización. Estos valores deben incluirse en la nómina y analizarse para determinar su efecto sobre las prestaciones sociales, la seguridad social y los demás cálculos laborales.
      p.mb-5 No constituyen salario las sumas ocasionales entregadas por mera liberalidad ni los valores proporcionados para facilitar el cumplimiento de las funciones, como gastos de representación, medios de transporte o elementos de trabajo. Sin embargo, la exclusión no procede cuando el pago remunera realmente el servicio, aunque haya sido denominado como auxilio o bonificación no salarial. Los siguientes conceptos permiten diferenciar las modalidades de remuneración y los controles requeridos para su liquidación: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Salario básico mensual
                  p.mb-0 Es una remuneración fija determinada por el valor pactado para el periodo. Se deben verificar el contrato, la vigencia del salario y los días liquidados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Jornal
                  p.mb-0 Es una remuneración fija que se determina mediante el valor diario por los días reconocidos. Se deben comprobar los días trabajados y las novedades del periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Salario por unidad de obra
                  p.mb-0 Es una remuneración variable calculada a partir de las unidades terminadas y el valor unitario acordado. Se deben validar las cantidades y su aprobación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Salario a destajo
                  p.mb-0 Es una remuneración variable determinada por el resultado producido y la tarifa acordada. Se deben revisar la producción y las condiciones pactadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comisión
                  p.mb-0 Es una remuneración variable calculada sobre una base de ventas o recaudos y un porcentaje acordado. Se deben confirmar los resultados, la tarifa y la fecha de causación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Porcentaje sobre ventas
                  p.mb-0 Es una remuneración variable determinada por las ventas reconocidas y el porcentaje pactado. Se deben verificar las devoluciones, anulaciones y los soportes correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bonificación salarial
                  p.mb-0 Puede ser fija o variable y se determina mediante un valor o una fórmula relacionada con el servicio. Se deben establecer su naturaleza salarial y las condiciones de causación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bonificación no salarial
                  p.mb-0 Es un pago ocasional o extralegal acordado sin remunerar directamente el servicio. Se deben verificar el acuerdo, la finalidad y el tratamiento legal aplicable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La clasificación debe atender a la naturaleza real del pago y a las condiciones pactadas, de acuerdo con los artículos 127, 128 y 132 del Código Sustantivo del Trabajo.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Cálculo de la remuneración variable
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___1.fit___box_1(data-aos="fade-right")
            p El valor variable debe calcularse con base en una fórmula previamente definida y conocida por el trabajador. Para ello, se deben comprobar el resultado alcanzado, el porcentaje o tarifa acordada, el periodo de causación y las condiciones establecidas para su reconocimiento.
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Comisión = base reconocida × porcentaje acordado
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Remuneración del periodo = salario fijo + remuneración variable
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una trabajadora recibe un salario básico mensual de $2.200.000 y una comisión equivalente al 3 % de las ventas reconocidas. Durante el periodo obtuvo ventas por $18.000.000.
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Comisión
              h5.mb-0 $18.000.000 × 3 % = $540.000
          .col-6
            .box___style_5
              p.mb-0.text-small Remuneración salarial del periodo
              h5.mb-0 $2.200.000 + $540.000 = $2.740.000
        p.mb-0 La comisión de $540.000 forma parte del salario porque corresponde a una contraprestación directa por los resultados obtenidos. Por tanto, debe incluirse en las bases laborales y de seguridad social que correspondan.
      p.mb-0 Antes de aprobar el valor, se deben cotejar las ventas con los registros comerciales, comprobar el porcentaje pactado y verificar si existen devoluciones o anulaciones que modifiquen la base. De esta manera, la remuneración fija y variable queda sustentada y preparada para integrar los demás devengados del periodo.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Horas extras, trabajo nocturno y días de descanso
      p La jornada ordinaria corresponde al tiempo acordado entre el empleador y el trabajador, sin superar la jornada máxima legal. La duración máxima general es de 42 horas semanales, distribuibles de común acuerdo en cinco o seis días, con garantía del día de descanso. El tiempo que exceda la jornada ordinaria constituye trabajo suplementario o de horas extras (Ley 2101 de 2021; Ley 2466 de 2025).
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___color-text-imgleft(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 El trabajo diurno se realiza entre las 6:00 a. m. y las 7:00 p. m., mientras que el trabajo nocturno comprende el periodo entre las 7:00 p. m. y las 6:00 a. m. del día siguiente. Cuando las horas nocturnas forman parte de la jornada ordinaria, se reconoce un recargo del 35 % sobre el valor de la hora ordinaria diurna (Código Sustantivo del Trabajo, 1950, arts. 160–168; Ley 2466 de 2025).
          p.mb-0 La hora extra diurna se remunera con un recargo del 25 %, mientras que la hora extra nocturna tiene un recargo del 75 % sobre el valor de la hora ordinaria diurna. El trabajo suplementario no puede exceder dos horas diarias ni doce horas semanales, salvo las excepciones establecidas para los sectores de seguridad y salud (Ley 50 de 1990; Ley 2466 de 2025).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 320px").m-auto
      p.mb-5 Los siguientes porcentajes permiten diferenciar los principales recargos y el factor total aplicable sobre el valor de la hora ordinaria diurna:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hora ordinaria diurna
              p.mb-0.text-center Se realiza dentro de la jornada, entre las 6:00 a. m. y las 7:00 p. m. No tiene recargo adicional (0 %) y su factor total es 1,00.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hora ordinaria nocturna
              p.mb-0.text-center Se realiza dentro de la jornada, entre las 7:00 p. m. y las 6:00 a. m. Tiene un recargo del 35 % y su factor total es 1,35.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hora extra diurna
              p.mb-0.text-center Excede la jornada ordinaria y se realiza en horario diurno. Tiene un recargo del 25 % y su factor total es 1,25.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hora extra nocturna
              p.mb-0.text-center Excede la jornada ordinaria y se realiza en horario nocturno. Tiene un recargo del 75 % y su factor total es 1,75.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hora en día de descanso obligatorio o festivo
              p.mb-0.text-center Se realiza durante el día de descanso o de fiesta. Desde el 1 de julio de 2026, el recargo es del 90 % y el factor total es 1,90.
          p.mb-5 El recargo por trabajo en día de descanso obligatorio o festivo aumentará al 100 % desde el 1 de julio de 2027. El empleador puede aplicar anticipadamente el 100 % (Ley 2466 de 2025).
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
            .col
              h3 Cálculo de los recargos
      p.mb-5 Un trabajador tiene un valor de hora ordinaria de $12.000 y labora las siguientes horas. Los cálculos permiten diferenciar el valor del recargo y el valor total de cada hora.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .style___tarjeta_rob.h-100
            .p-4
              h4.text-center Hora ordinaria nocturna
              .box___style_5.mb-2
                h5.mb-0 $12.000 × 35 % = $4.200 de recargo
              .box___style_5
                h5.mb-0 $12.000 + $4.200 = $16.200
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .style___tarjeta_rob.h-100
            .p-4
              h4.text-center Hora extra diurna
              .box___style_5.mb-2
                h5.mb-0 $12.000 × 25 % = $3.000 de recargo
              .box___style_5
                h5.mb-0 $12.000 + $3.000 = $15.000
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .style___tarjeta_rob.h-100
            .p-4
              h4.text-center Hora extra nocturna
              .box___style_5.mb-2
                h5.mb-0 $12.000 × 75 % = $9.000 de recargo
              .box___style_5
                h5.mb-0 $12.000 + $9.000 = $21.000
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .style___tarjeta_rob.h-100
            .p-4
              h4.text-center Hora trabajada en día de descanso obligatorio
              .box___style_5.mb-2
                h5.mb-0 $12.000 × 90 % = $10.800 de recargo
              .box___style_5
                h5.mb-0 $12.000 + $10.800 = $22.800
      p El trabajo en día de descanso obligatorio es ocasional cuando se laboran hasta dos de estos días durante el mes calendario y habitual cuando se laboran tres o más. En el trabajo habitual, el trabajador tiene derecho al pago correspondiente y a un descanso compensatorio remunerado; en el trabajo ocasional, puede elegir entre el descanso compensatorio o la retribución en dinero (Código Sustantivo del Trabajo, 1950; Ley 2466 de 2025).
      p.mb-0 Antes de aprobar la liquidación, se deben cotejar las horas con los registros de asistencia, los turnos programados y la autorización correspondiente. El pago de las horas extras y del recargo nocturno debe realizarse con el salario del periodo en que se causaron o, a más tardar, con el salario del periodo siguiente.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Incapacidades, licencias, ausencias y suspensiones
      p.mb-5 A continuación, se presenta un video que explica el tratamiento de las incapacidades, licencias, ausencias y suspensiones en la nómina, así como sus principales efectos sobre el reconocimiento económico, los aportes al Sistema de Seguridad Social y las prestaciones sociales.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2BxyFXfck2w" title="Incapacidades, licencias, ausencias y suspensiones en la nómina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Incapacidades, licencias, ausencias y suspensiones en la nómina
      p.mb-5 Las siguientes novedades tienen tratamientos diferentes según su origen, duración y soporte. Su clasificación permite determinar el reconocimiento correspondiente y los controles necesarios.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incapacidad de origen común
                  p.mb-0 Sustituye temporalmente el salario por un auxilio económico. El empleador asume los dos primeros días y la EPS, desde el tercero. Se deben verificar el certificado, las fechas, el origen y las prórrogas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incapacidad de origen laboral
                  p.mb-0 Se reconoce sobre el 100 % del ingreso base de cotización y está a cargo de la ARL. Se deben confirmar la calificación del origen y el reporte del accidente o enfermedad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Licencia de maternidad
                  p.mb-0 Corresponde a un descanso remunerado de 18 semanas, con las ampliaciones que procedan. El reconocimiento corresponde al sistema de salud, según el cumplimiento de los requisitos. Se deben verificar el certificado, la fecha de inicio y las semanas reconocidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Licencia de paternidad
                  p.mb-0 Corresponde a un descanso remunerado de dos semanas. El reconocimiento está a cargo del sistema de salud, según el cumplimiento de los requisitos. Se deben verificar el registro civil y las condiciones de reconocimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Licencia por luto
                  p.mb-0 Corresponde a un permiso remunerado de cinco días hábiles, a cargo del empleador. Se deben comprobar el parentesco y el soporte del fallecimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Licencia no remunerada
                  p.mb-0 No genera salario durante el tiempo autorizado. Se deben verificar la solicitud, la autorización, las fechas y los efectos sobre los aportes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ausencia sin soporte
                  p.mb-0 No debe registrarse como incapacidad o licencia. Su tratamiento depende de la decisión adoptada conforme al procedimiento laboral. Se deben verificar la asistencia, los descargos y el reglamento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Suspensión del contrato
                  p.mb-0 Interrumpe temporalmente la prestación del servicio y el pago de salarios. Se deben identificar la causal, la duración y los efectos sobre la seguridad social.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La licencia no remunerada puede dar lugar a la suspensión temporal del contrato cuando es concedida por el empleador. Durante la suspensión, se interrumpe la obligación del trabajador de prestar el servicio y la del empleador de pagar el salario, aunque deben revisarse de manera separada los efectos sobre la seguridad social y las prestaciones (Código Sustantivo del Trabajo, 1950).
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador presenta una incapacidad de origen común por cinco días. La novedad debe registrarse por la totalidad del periodo certificado, pero el responsable del reconocimiento se distribuye así:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Días 1 y 2: a cargo del empleador.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Días 3, 4 y 5: a cargo de la EPS.
        p.mb-0 Antes de cerrar la nómina, se deben comprobar el certificado, la fecha de expedición, el origen común, la continuidad de la incapacidad y su registro en la PILA. No debe tratarse como una ausencia injustificada ni como una licencia no remunerada (Decreto 780 de 2016).
      p.mb-0 En conclusión, cada novedad debe analizarse de acuerdo con su origen y soporte, porque no todas generan el mismo pago ni producen iguales efectos sobre el salario y los aportes. Esta diferenciación evita descontar días de forma incorrecta y permite continuar con la liquidación de vacaciones, prestaciones sociales y provisiones.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Vacaciones, prestaciones sociales y provisiones
      p.mb-5 Las vacaciones corresponden a un descanso remunerado de quince días hábiles consecutivos por cada año de servicios y se reconocen proporcionalmente cuando el contrato termina antes de completar el año. Durante su disfrute, el trabajador recibe el salario ordinario vigente al iniciar el descanso; cuando el salario es variable, se utiliza el promedio de lo devengado durante el año anterior o durante el tiempo laborado si este es menor (Código Sustantivo del Trabajo, 1950, arts. 186 y 192).
      .box___color-text-imgleft.color___3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p Las prestaciones sociales comprenden, entre otros conceptos, la prima de servicios, las cesantías y los intereses sobre las cesantías. La prima equivale a treinta días de salario por año y se paga en dos partes: la primera, máximo el 30 de junio, y la segunda, durante los primeros veinte días de diciembre. Su reconocimiento es proporcional al tiempo laborado (Código Sustantivo del Trabajo, 1950, art. 306).
            p.mb-0 El auxilio de cesantías equivale a un mes de salario por cada año de servicios o proporcionalmente por fracción. Los intereses sobre las cesantías corresponden al 12 % anual sobre las cesantías causadas o al valor proporcional cuando el periodo es inferior a un año (Código Sustantivo del Trabajo, 1950, art. 249).
      p.mb-5 Los siguientes conceptos permiten diferenciar los derechos causados, las fórmulas generales y los controles requeridos para su liquidación o reconocimiento periódico:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Vacaciones
              p.mb-0.text-center Corresponden a quince días hábiles por cada año de servicios. La fórmula general es base de vacaciones × días trabajados ÷ 720. Se deben verificar el periodo causado, los días disfrutados y el salario aplicable.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Prima de servicios
              p.mb-0.text-center Equivale a treinta días de salario por año. La fórmula general es base de prima × días trabajados ÷ 360. Se deben confirmar el periodo, los pagos anteriores y los factores incluidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cesantías
              p.mb-0.text-center Equivalen a un mes de salario por año. La fórmula general es base de cesantías × días trabajados ÷ 360. Se deben revisar el salario, sus variaciones y el tiempo liquidado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Intereses sobre cesantías
              p.mb-0.text-center Corresponden al 12 % anual o a su valor proporcional. La fórmula general es cesantías × días trabajados × 12 % ÷ 360. Se deben comprobar las cesantías causadas y el número de días.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Provisión mensual
              p.mb-0.text-center Permite reconocer gradualmente el gasto y la obligación. Se determina mediante el valor estimado del concepto causado en el mes. Se debe conciliar la provisión con los pagos y los saldos acumulados.
      p.mb-5 La liquidación y el reconocimiento periódico de estos conceptos deben atender a las reglas laborales aplicables y al marco contable correspondiente (Código Sustantivo del Trabajo, 1950, arts. 186, 192, 249 y 306; Decreto 116 de 1976; Decreto 2420 de 2015).
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador recibe un salario mensual de $2.400.000 y ha laborado 180 días. Para simplificar el ejercicio, se supone que no existen pagos variables ni otros factores que modifiquen las bases.
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Vacaciones
              h5.mb-0 $2.400.000 × 180 ÷ 720 = $600.000
          .col-6
            .box___style_5
              p.mb-0.text-small Prima de servicios
              h5.mb-0 $2.400.000 × 180 ÷ 360 = $1.200.000
        .row.align-items-center.mb-0
          .col-6
            .box___style_5
              p.mb-0.text-small Cesantías
              h5.mb-0 $2.400.000 × 180 ÷ 360 = $1.200.000
          .col-6
            .box___style_5
              p.mb-0.text-small Intereses sobre cesantías
              h5.mb-0 $1.200.000 × 180 × 12 % ÷ 360 = $72.000
      p.mb-5 Antes de aprobar los valores, se deben revisar las fechas de ingreso y corte, los pagos variables, las vacaciones ya disfrutadas y los abonos efectuados durante el periodo. Las bases de vacaciones, prima y cesantías no deben asumirse automáticamente como iguales, porque pueden variar según la naturaleza de los conceptos devengados (Código Sustantivo del Trabajo, 1950, arts. 186, 192, 249 y 306).
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img32.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las provisiones permiten reconocer periódicamente el gasto y la obligación causada, aunque el pago se realice en una fecha posterior. Al cierre de cada periodo, los valores provisionados deben compararse con los derechos efectivamente causados y ajustarse cuando existan diferencias por cambios salariales, novedades o pagos realizados.
          br
          br
          p En conclusión, la liquidación debe diferenciar el descanso remunerado, las prestaciones sociales y las provisiones contables. Esta separación facilita determinar los derechos causados, reconocer las obligaciones y preparar la información necesaria para una eventual terminación del contrato.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Terminación, liquidación final e indemnizaciones
      p.mb-5 La terminación del contrato puede producirse, entre otras causas, por acuerdo entre las partes, vencimiento del plazo, finalización de la obra o labor, decisión unilateral o configuración de una justa causa. Independientemente del motivo, se deben determinar los salarios y derechos causados hasta la fecha efectiva de retiro (Código Sustantivo del Trabajo, 1950, art. 61).
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img33.png')})` }")
        .bloque-texto-g__texto.p-4
          p La liquidación final puede comprender salarios pendientes, prima de servicios, cesantías, intereses sobre las cesantías, vacaciones no disfrutadas y demás conceptos causados. Las vacaciones deben compensarse proporcionalmente por el tiempo efectivamente trabajado cuando termina el contrato, aunque no se haya completado un año de servicios (Ley 995 de 2005).
      p.mb-5 La indemnización por terminación sin justa causa no hace parte de todas las liquidaciones. Se reconoce cuando el empleador termina unilateralmente el contrato sin una causa legal comprobada o cuando da lugar a que el trabajador lo termine por una justa causa atribuible al empleador (Código Sustantivo del Trabajo, 1950, art. 64). Los siguientes conceptos deben revisarse al finalizar el contrato, diferenciando los derechos causados de las indemnizaciones que eventualmente correspondan: 
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img34.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Salario pendiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula mediante salario diario × días pendientes de pago. Se deben verificar la fecha efectiva de retiro y el último periodo pagado.
            .row(titulo="Prima de servicios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula mediante base de prima × días causados ÷ 360. Se deben descontar los valores pagados durante el semestre.
            .row(titulo="Cesantías").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calculan mediante base de cesantías × días causados ÷ 360. Se deben revisar las consignaciones anteriores y el tiempo pendiente.
            .row(titulo="Intereses sobre cesantías").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calculan mediante cesantías × días causados × 12 % ÷ 360. Se deben comprobar los intereses pagados previamente.
            .row(titulo="Vacaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calculan mediante base de vacaciones × días causados ÷ 720. Se deben restar los periodos disfrutados o compensados.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Indemnización en contrato a término fijo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a los salarios del tiempo faltante para cumplir el plazo. Se debe verificar la fecha pactada de terminación.
            .row(titulo="Indemnización en contrato por obra o labor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al valor del tiempo estimado faltante, sin ser inferior a quince días. Se deben comprobar la obra contratada y su estado.
            .row(titulo="Indemnización en contrato indefinido con salario inferior a diez SMLMV").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a treinta días por el primer año y veinte días por cada año adicional, proporcionalmente por fracción. Se deben verificar el salario y la antigüedad.
            .row(titulo="Indemnización en contrato indefinido con salario igual o superior a diez SMLMV").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a veinte días por el primer año y quince días por cada año adicional, proporcionalmente por fracción. Se deben verificar el salario y la antigüedad.
            .row(titulo="Deducciones finales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden los descuentos autorizados por la ley, el trabajador o una orden judicial. Se deben confirmar el soporte, el saldo y el límite de la deducción.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img35.png", alt="" style="width: 350px").m-auto
      p.mb-5 La liquidación final debe sustentarse en las fechas, las bases, los pagos anteriores y la causa de terminación, conforme a las disposiciones aplicables (Código Sustantivo del Trabajo, 1950, arts. 64, 186, 249 y 306; Ley 995 de 2005).
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador con contrato a término indefinido, salario mensual de $3.000.000 y una antigüedad de dos años y seis meses es despedido sin justa causa. El salario es inferior a diez salarios mínimos mensuales legales vigentes.
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Salario diario
              h5.mb-0 $3.000.000 ÷ 30 = $100.000
        p Días de indemnización
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Primer año: 30 días.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Segundo año: 20 días.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Fracción de seis meses: 10 días.
        .row.align-items-center.mb-0
          .col-6
            .box___style_5
              p.mb-0.text-small Total de días
              h5.mb-0 30 + 20 + 10 = 60 días 
          .col-6
            .box___style_5
              p.mb-0.text-small Valor de la indemnización
              h5.mb-0 $100.000 × 60 = $6.000.000
      p.mb-5 A este valor deben sumarse los salarios, prestaciones sociales y vacaciones causados y pendientes hasta la fecha del retiro. La indemnización no reemplaza estos derechos, sino que corresponde a un concepto adicional originado en la terminación sin justa causa (Código Sustantivo del Trabajo, 1950, art. 64).
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img36.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El empleador debe revisar y pagar los salarios y prestaciones debidos al finalizar el vínculo. La falta de pago puede dar lugar a la indemnización moratoria prevista en el artículo 65; sin embargo, su imposición no es automática, pues la jurisprudencia exige analizar la conducta y la buena o mala fe del empleador en cada caso.
          .box___style_1.color___2.fit___box_2(data-aos="fade-left")
            p.mb-0 En conclusión, la liquidación final debe separar los derechos causados de las indemnizaciones que eventualmente correspondan. La verificación de las fechas, bases, pagos anteriores y causa de terminación permite establecer correctamente el valor definitivo adeudado al trabajador.

</template>

<script>
export default {
  name: 'Tema2',
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
