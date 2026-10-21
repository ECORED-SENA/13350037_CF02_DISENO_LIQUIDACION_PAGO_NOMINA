<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Preparación y metodología de la liquidación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La liquidación de nómina debe comenzar con la revisión de las condiciones que identifican la relación laboral y determinan los pagos correspondientes: trabajador, modalidad contractual, salario, jornada, periodo de pago, fecha de ingreso, novedades y demás condiciones pactadas. El contrato escrito debe contener, entre otros datos, la identificación de las partes, el lugar de prestación del servicio, la naturaleza del trabajo, la remuneración, los periodos de pago y la duración del vínculo (Código Sustantivo del Trabajo, 1950).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La información laboral debe relacionarse con las novedades y los valores que posteriormente se reportan a la seguridad social. La estructura de la Planilla Integrada de Liquidación de Aportes (PILA) contempla campos para identificar al cotizante, las administradoras, los días cotizados, el salario básico, los ingresos base de cotización y las novedades de ingreso, retiro, variación salarial, suspensión, incapacidad, licencia y vacaciones. Por esta razón, las fechas y bases utilizadas en la nómina deben ser coherentes con los datos reportados mediante la planilla (Resolución 2388 de 2016).
      p La preparación también comprende la generación y revisión de resultados preliminares, debido a que la información de la nómina puede utilizarse para producir comprobantes, registros contables, archivos de pago, reportes a la seguridad social y el documento soporte de pago de nómina electrónica. La regulación de este documento identifica los valores devengados, los valores deducidos y la diferencia resultante, y contempla notas de ajuste cuando sea necesario corregir la información transmitida (DIAN, 2025).
      p.mb-0 En consecuencia, la preparación de la liquidación no consiste únicamente en ingresar datos en una hoja de cálculo o en un software. Requiere establecer un procedimiento que determine fechas, fuentes de información, responsables, controles, bases, fórmulas y evidencias, de manera que cada valor pueda ser explicado desde su origen hasta su pago o reporte (Código Sustantivo del Trabajo, 1950).
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Ciclo de nómina, políticas y responsables
      p.mb-5 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img3.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El ciclo de nómina comprende las actividades realizadas desde la apertura del periodo hasta la aprobación, el pago, la contabilización, el reporte y la conservación de los soportes. Su organización depende del tamaño y de los procedimientos de cada entidad, pero debe permitir que las novedades, los días cotizados, los ingresos base de cotización y los valores pagados sean registrados y verificados antes de generar los reportes definitivos (Resolución 0634 de 2006; DIAN; OFIMA, 2026).
          .box___style_1(data-aos="fade-left")
            p La periodicidad definida por la organización debe respetar las condiciones pactadas y los límites laborales. El salario en dinero se paga por periodos iguales y vencidos; el periodo de pago de los jornales no puede ser superior a una semana y el de los sueldos no puede ser mayor de un mes.
            p.mb-0 El trabajo suplementario y el recargo nocturno deben pagarse con el salario del periodo en que se causaron o, a más tardar, con el salario del periodo siguiente (Código Sustantivo del Trabajo, 1950).
      p Una organización puede pagar semanal, quincenal o mensualmente, de acuerdo con la forma de remuneración y sus políticas. Sin embargo, el periodo de pago al trabajador no siempre coincide con los demás procesos. Por ejemplo, una empresa puede pagar quincenalmente y consolidar mensualmente la información utilizada para la PILA, la contabilización y la nómina electrónica.
      p El calendario debe establecer las fechas de apertura, recepción y cierre de novedades, generación de la prenómina, revisión, aprobación y pago. También debe definir el procedimiento aplicable a los documentos recibidos después del cierre. Cuando una novedad extemporánea afecta días cotizados, bases o valores reportados, debe analizarse la necesidad de corregir la nómina, la PILA o el documento soporte de pago de nómina electrónica, conservando la evidencia del cambio.
      p.mb-5 Las siguientes etapas organizan el procesamiento de la nómina, desde la apertura del periodo hasta el archivo de los soportes. Cada una integra la actividad principal, el responsable habitual, el control requerido y la evidencia correspondiente:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Apertura
                    p.mb-0 Se habilita el periodo y se revisan los parámetros vigentes. Nómina o talento humano verifica las fechas, los conceptos, la jornada y la configuración. La evidencia de esta actividad es el registro de apertura.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 170px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 170px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Recepción de novedades
                    p.mb-0 Se recopilan ingresos, retiros, horas adicionales, ausencias, incapacidades y deducciones. Participan jefes, trabajadores y talento humano, quienes deben comprobar la oportunidad, autorización y soporte de la información. Se conservan los formatos y documentos correspondientes.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Cierre de novedades
                    p.mb-0 Se finaliza la recepción ordinaria de información. Talento humano o nómina identifica los pendientes y las novedades extemporáneas. La evidencia es la relación de novedades cerradas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 170px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 170px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Actualización de datos
                    p.mb-0 Se registran los cambios contractuales, salariales, bancarios y de afiliación. Talento humano y nómina comparan cada cambio con el documento aprobado. Se conservan el contrato, el otrosí o la certificación correspondiente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Generación de prenómina
                    p.mb-0 Se calculan preliminarmente los devengados, las deducciones y las bases. Nómina revisa los días, las fórmulas, los porcentajes y los conceptos. El resultado se conserva en el reporte de prenómina.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img9.svg', alt='' style="width: 170px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img10.svg', alt='' style="width: 170px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisión y aprobación
                    p.mb-0 Se analizan los resultados antes del cierre definitivo. Nómina, talento humano, contabilidad y el responsable autorizador comparan totales, variaciones y excepciones. La revisión queda respaldada mediante una lista de verificación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Pago y contabilización
                    p.mb-0 Se remiten los valores y se reconocen las obligaciones. Tesorería y contabilidad cotejan la nómina, el archivo bancario y los registros. Los comprobantes constituyen la evidencia del proceso.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.svg', alt='' style="width: 170px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 170px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Reporte y archivo
                    p.mb-0 Se generan los reportes y se conservan los soportes. Nómina, contabilidad y gestión documental verifican la transmisión, integridad y almacenamiento. Se conserva el expediente del periodo junto con los reportes correspondientes.
      p.mb-5 La secuencia permite establecer controles antes y después del pago, así como conservar la trazabilidad de las actividades realizadas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            p.mb-0 Las políticas de nómina deben establecer las fuentes aceptadas, los responsables de registrar y aprobar la información, los tiempos de entrega, los controles y la forma de resolver las inconsistencias. Estas disposiciones internas pueden ordenar el procedimiento, pero no pueden desconocer los derechos mínimos e irrenunciables establecidos en la legislación laboral (Código Sustantivo del Trabajo, 1950, arts. 13 y 14).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img13.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 La asignación de responsabilidades debe considerar el carácter reservado de la información. Los datos laborales, salariales, bancarios, familiares y de afiliación son datos personales y deben tratarse bajo los principios de finalidad, acceso restringido, seguridad y confidencialidad. Por ello, los usuarios del sistema deben contar únicamente con los permisos necesarios para desarrollar sus funciones.
      p.mb-5 También es recomendable separar el registro, la revisión, la aprobación y el pago. Esta distribución permite que una modificación realizada por una persona sea revisada por otra antes de producir una salida definitiva. Se trata de un criterio pedagógico de control interno que disminuye el riesgo de errores, duplicidades, cambios sin autorización o pagos dirigidos a un beneficiario incorrecto.
      .box___style_3(data-aos="zoom-in").mb-0
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una empresa liquida mensualmente y realiza el pago el último día hábil. El calendario dispone que las novedades se reciben hasta el día 24, la prenómina se genera el día 25 y la revisión se efectúa los días 26 y 27. Talento humano valida las novedades, nómina realiza los cálculos, contabilidad comprueba los registros y tesorería ejecuta el pago después de recibir la autorización.
        p El día 26 se recibe una incapacidad iniciada antes de la fecha de cierre. Si la nómina todavía no ha sido aprobada, la empresa puede revisar el soporte e incorporarlo al cálculo. Si la nómina ya fue cerrada o reportada, debe determinar qué valores fueron afectados y aplicar el procedimiento de corrección correspondiente, manteniendo la relación entre el documento inicial y el ajuste.
        p.mb-0 De esta forma, el ciclo organiza las actividades y establece puntos de control antes y después del pago. La definición de fechas, responsables y evidencias permite continuar con la revisión de los datos del trabajador, el contrato y el periodo que será liquidado.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Datos del trabajador, contrato y periodo liquidado
      p Los datos maestros corresponden a la información utilizada para identificar al trabajador y aplicar las condiciones de la relación laboral. Comprenden, entre otros, el nombre, documento, cargo, modalidad contractual, lugar de trabajo, salario, periodicidad del pago, jornada, fecha de ingreso, cuenta bancaria y administradoras de seguridad social. Parte de esta información se encuentra en el contrato, el cual debe identificar a las partes y señalar las condiciones esenciales de la vinculación (Código Sustantivo del Trabajo, 1950, art. 39).
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___color-text-imgleft(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 La organización debe conservar la vigencia histórica de los cambios. Cuando se modifica el salario, la jornada, el cargo, el centro de costo o la modalidad contractual, no es suficiente sustituir el dato anterior; es necesario registrar la fecha desde la cual comienza a aplicarse el cambio. Esta trazabilidad permite liquidar correctamente periodos anteriores, retroactivos, prestaciones y reportes.
          p.mb-0 Los datos personales deben ser exactos, actualizados, comprobables y comprensibles. La Ley 1581 de 2012 establece que el tratamiento debe atender, entre otros, los principios de veracidad o calidad, seguridad y confidencialidad. En consecuencia, los cambios de identificación, dirección, cuenta bancaria o beneficiarios deben sustentarse, validarse y protegerse frente al acceso no autorizado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 320px").m-auto
      p El estado del contrato determina si el trabajador debe incluirse durante todo el periodo o solamente durante una parte. Deben revisarse las fechas de ingreso y retiro, las suspensiones, las licencias y las modificaciones contractuales, debido a que estas situaciones pueden afectar los días pagados y cotizados. La PILA contempla campos específicos para las fechas de ingreso, retiro, variación salarial, suspensión, incapacidad, licencia y vacaciones (Resolución 2388 de 2016).
      p.mb-5 Los siguientes grupos de datos deben verificarse antes de generar la prenómina. Cada uno integra la información requerida, el soporte principal y su efecto en la liquidación: 
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img17.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se verifican los nombres, apellidos, tipo y número de documento, con base en el documento de identidad. Esta información identifica al beneficiario del pago y evita registros duplicados.
            .row(titulo="Vinculación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan la modalidad contractual, la fecha de ingreso, la fecha de terminación y el estado del contrato. El soporte es el contrato, otrosí o comunicación autorizada. Estos datos determinan el periodo durante el cual debe liquidarse al trabajador.
            .row(titulo="Remuneración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se comprueban el salario, la modalidad salarial, la periodicidad, las comisiones, las bonificaciones y los beneficios. El contrato, el otrosí y la política salarial sustentan esta información, que define los conceptos y las bases utilizadas en los cálculos.
            .row(titulo="Jornada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se verifican el horario, las horas semanales, los turnos y la distribución de descansos, con base en el contrato, la programación de turnos y el reglamento. Esta información permite comprobar el tiempo ordinario y las horas adicionales.
            .row(titulo="Cargo y ubicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan el cargo, el área, la sede, el proyecto y el centro de costo. La estructura organizacional y los registros internos sustentan estos datos, que facilitan la distribución y contabilización de los gastos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Seguridad social").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se identifican la EPS, la administradora de pensiones, la ARL y la caja de compensación, mediante certificados y formularios de afiliación. Esta información determina las entidades receptoras de los aportes.
            .row(titulo="Información bancaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se verifican la entidad financiera, el tipo y el número de cuenta, con base en la certificación bancaria. Estos datos determinan el destino del pago.
            .row(titulo="Información tributaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan los datos requeridos para la depuración de retenciones, sustentados en certificados y formatos tributarios. Esta información incide en el cálculo de la retención en la fuente.
            .row(titulo="Deducciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se comprueban las libranzas, los préstamos, los embargos y los descuentos autorizados. La autorización, orden judicial o documento válido sustenta los valores descontados al trabajador.
            .row(titulo="Datos personales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan la dirección, el contacto, los beneficiarios y los demás datos relacionados, mediante el formato de actualización. Esta información apoya los trámites laborales, prestacionales y administrativos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img18.png", alt="" style="width: 350px").m-auto
      p.mb-5 La revisión de estos datos permite establecer las condiciones que deben aplicarse en el periodo y conservar los soportes necesarios para los cálculos y reportes.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Determinación del periodo liquidado
      p.mb-5 El periodo liquidado debe identificarse mediante una #[b fecha inicial y una fecha final]. Además, se debe determinar si el trabajador estuvo activo durante todo el periodo o si presentó un ingreso, retiro, suspensión, licencia, incapacidad, vacaciones u otra novedad que afecte los días reconocidos. La PILA contempla campos específicos para reportar estas situaciones y relacionarlas con los días y las bases de cada subsistema (Resolución 2388 de 2016).
      .box___color-text-imgleft(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p Cuando el trabajador tiene pactado un salario mensual y presta sus servicios durante todo #[b el periodo, recibe la remuneración mensual acordada, independientemente de que el mes calendario tenga veintiocho, veintinueve, treinta o treinta y un días]. Para liquidar fracciones del salario mensual, la doctrina administrativa ha utilizado una base de treinta días, criterio que debe aplicarse de manera uniforme y sin desconocer los días realmente trabajados o las novedades presentadas.
            p.mb-0 #[b La base de treinta días] no significa que puedan omitirse las fechas reales de ingreso, retiro o novedad. Estas fechas deben conservarse porque determinan el momento desde el cual nace o termina el derecho al salario y permiten reportar correctamente los días cotizados en la seguridad social. Tampoco significa que todos los conceptos de nómina tengan la misma base, debido a que las incapacidades, licencias, vacaciones y prestaciones pueden tener reglas particulares.
      p.mb-5 El número de días reconocido en el salario puede ser diferente de los días informados en algunos subsistemas de la seguridad social, dependiendo de la naturaleza de la novedad. Por ello, no debe trasladarse automáticamente el mismo número a todos los campos sin revisar el tratamiento de la incapacidad, licencia, suspensión, vacaciones, ingreso o retiro.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Una trabajadora ingresa el día 7 de un mes de treinta días y presenta una licencia no remunerada entre los días 18 y 20. Antes de efectuar el cálculo, se debe confirmar que la fecha de ingreso registrada coincida con el contrato, que la licencia haya sido autorizada, que el salario corresponda con el valor pactado y que las afiliaciones estén activas desde el inicio de la relación laboral.
        p.mb-0 La trabajadora estuvo vinculada durante veinticuatro días, contados desde el día 7 hasta el día 30. Al descontar preliminarmente los tres días de licencia no remunerada, se obtienen veintiún días con reconocimiento salarial. Sin embargo, el análisis no debe finalizar en este resultado, porque también es necesario determinar el efecto de la novedad sobre los aportes, las prestaciones, los auxilios y los reportes del periodo.
      p La revisión conjunta de #[b los datos personales, el contrato, las fechas y las novedades permite establecer quién debe ser liquidado, durante cuántos días y bajo cuáles condiciones]. Una vez depurada esta información, se pueden determinar las diferentes bases utilizadas para calcular salarios, prestaciones sociales, seguridad social, aportes parafiscales y demás obligaciones del periodo.
      p.mb-5 El siguiente control reúne las fechas, condiciones contractuales y novedades del caso, junto con las verificaciones necesarias antes de iniciar los cálculos: 
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Periodo de nómina
                  p.mb-0.text-center Comprende del 1 al 30 de septiembre. Se debe confirmar que corresponde con el calendario definido por la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fecha de ingreso
                  p.mb-0.text-center La trabajadora ingresó el 7 de septiembre. La liquidación debe efectuarse desde la fecha efectiva de vinculación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fecha de retiro
                  p.mb-0.text-center No aplica, debido a que el contrato continúa activo. Se debe confirmar esta condición antes de liquidar el periodo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Días comprendidos desde el ingreso
                  p.mb-0.text-center Corresponden a 24 días, contados desde el día 7 hasta el día 30. Este cálculo permite establecer el tiempo comprendido desde la vinculación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Licencia no remunerada
                  p.mb-0.text-center Comprende del 18 al 20 de septiembre. Se deben verificar la autorización, las fechas y el tratamiento correspondiente a la novedad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Días preliminares con salario
                  p.mb-0.text-center Corresponden a 21 días. Se obtienen al restar los tres días de licencia no remunerada a los días inicialmente reconocidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Salario vigente
                  p.mb-0.text-center Corresponde al valor pactado desde el ingreso. Se debe cotejar con el contrato y con la información registrada en el sistema.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Jornada
                  p.mb-0.text-center Corresponde a la jornada registrada en el contrato. Se debe comparar con la programación de horarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Afiliaciones
                  p.mb-0.text-center Deben estar activas desde el ingreso. Se requiere verificar los soportes y la fecha de cobertura.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cuenta bancaria
                  p.mb-0.text-center Corresponde a la cuenta certificada por la trabajadora. Se deben confirmar la titularidad y el estado de la cuenta.
      p.mb-0 Este control permite consolidar la información necesaria para continuar con la determinación de las bases y los conceptos que integran la liquidación de nómina.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Bases de liquidación e ingreso base de cotización
      p.mb-5 Una base de liquidación es el valor sobre el cual se aplica una fórmula, proporción o porcentaje para determinar un concepto. No existe una base única para toda la nómina: pueden presentarse diferencias entre la base salarial, la base prestacional, la base de vacaciones, el ingreso base de cotización, la base parafiscal y la base sometida a retención (Código Sustantivo del Trabajo, 1950; Ley 100 de 1993).
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img32.png')})` }")
        .bloque-texto-g__texto.p-4
          p El primer paso consiste en clasificar los pagos. Constituye salario no solo la remuneración ordinaria, fija o variable, sino todo lo recibido como contraprestación directa del servicio, cualquiera que sea su denominación. Por su parte, no constituyen salario las sumas que el trabajador recibe ocasionalmente y por mera liberalidad, ni aquellas destinadas a facilitar el cumplimiento de sus funciones sin enriquecer su patrimonio, junto con los demás conceptos expresamente excluidos por la ley (Código Sustantivo del Trabajo, 1950, arts. 127 y 128).
          br
          br
          p El ingreso base de cotización (IBC) es el valor utilizado para calcular los aportes al Sistema de Seguridad Social Integral. Para los trabajadores dependientes, la Ley 100 de 1993 establece que la base corresponde al salario mensual y, para los trabajadores particulares, remite a las reglas del Código Sustantivo del Trabajo (Ley 100 de 1993).
      p.mb-5 Los pagos no constitutivos de salario deben someterse al límite previsto para efectos de seguridad social. Cuando estos pagos superan el 40 % del total de la remuneración, la parte que excede el porcentaje debe incorporarse al ingreso base de cotización (Ley 1393 de 2010). Las principales bases utilizadas en la nómina se diferencian por su finalidad, los conceptos que pueden incluir y los controles necesarios para su aplicación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Total devengado
                  p.mb-0 Identifica todos los valores reconocidos al trabajador, como salarios, auxilios, incapacidades, vacaciones y pagos no salariales. El control principal consiste en verificar que cada concepto tenga soporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Base salarial
                  p.mb-0 Reúne los pagos que remuneran directamente el servicio, como salario, comisiones, horas extras, recargos y bonificaciones salariales. Para determinarla, debe analizarse la naturaleza real de cada pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Base prestacional
                  p.mb-0 Se utiliza para calcular prima, cesantías e intereses, según corresponda. Puede incluir salarios y los factores que legalmente integren cada prestación, por lo que deben revisarse las inclusiones y exclusiones aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Base de vacaciones
                  p.mb-0 Permite calcular el descanso remunerado o su compensación. Comprende el salario y los factores aplicables según la modalidad de remuneración. No debe utilizarse automáticamente la base prestacional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingreso base de cotización
                  p.mb-0 Se utiliza para calcular los aportes a seguridad social. Puede incluir pagos salariales y el exceso de pagos no salariales cuando aplique. Deben verificarse las novedades, los días cotizados y el límite del 40 %.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Base parafiscal
                  p.mb-0 Se utiliza para calcular los aportes parafiscales cuando procedan. Comprende la nómina mensual de salarios y los demás conceptos legalmente incluidos. Deben revisarse la obligación, las exoneraciones y la naturaleza del pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Neto por pagar
                  p.mb-0 Determina el valor que recibe el trabajador después de restar las deducciones al total devengado. El resultado debe cotejarse con el comprobante y el archivo bancario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img39.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La identificación de estas bases permite aplicar cada cálculo según su finalidad, sin trasladar automáticamente los mismos conceptos a todas las obligaciones.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img19.svg" style="max-width: 60px").m-auto
        .col
          h3 Aplicación del límite del 40 %
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___1.fit___box_1(data-aos="fade-right")
            p Para aplicar el límite a los pagos no salariales, pueden utilizarse las siguientes operaciones:
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Total de la remuneración = pagos salariales + pagos no salariales 
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Límite admitido = total de la remuneración × 40 %
            .box___style_4.mb-0
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Exceso incorporado al IBC = pagos no salariales - límite admitido
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img40.png', alt='').m-auto
      p.mb-5 Estas fórmulas constituyen una representación pedagógica del artículo 30 de la Ley 1393 de 2010. El exceso se incorpora solamente cuando el resultado es positivo.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador recibe durante el mes los siguientes pagos:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Salario básico: $3.000.000.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Comisión salarial: $400.000.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Bonificación no salarial: $2.600.000.
        p Con estos valores, se determina el total de la remuneración y se aplica el límite del 40 %:
        .box___style_5.mb-2(data-aos="zoom-in")
          p.mb-0.text-small Total de la remuneración
          h5.mb-0 $3.000.000 + $400.000 + $2.600.000 = $6.000.000
        .row.align-items-center.mb-2(data-aos="zoom-in")
          .col-6
            .box___style_5
              p.mb-0.text-small Límite del 40 %
              h5.mb-0 $6.000.000 × 40 % = $2.400.000
          .col-6
            .box___style_5
              p.mb-0.text-small Exceso del pago no salarial
              h5.mb-0 $2.600.000 - $2.400.000 = $200.000
        .box___style_5.mb-2(data-aos="zoom-in")
          p.mb-0.text-small Ingreso base de cotización
          h5.mb-0 $3.000.000 + $400.000 + $200.000 = $3.600.000
      p.mb-0 En síntesis, la determinación de las bases requiere clasificar correctamente cada pago, identificar la finalidad del cálculo y verificar los días y novedades del periodo. Esta revisión permite aplicar las fórmulas de nómina sin trasladar automáticamente una misma base a salarios, prestaciones, aportes y demás obligaciones.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Fórmulas, proporcionalidad y aproximación de valores
      p Las fórmulas de nómina permiten convertir los datos contractuales y las novedades del periodo en valores de nómina. Antes de realizar cada operación, se deben identificar el concepto, la base, los días u horas reconocidos, el porcentaje aplicable y la vigencia del salario. Un cálculo puede ser matemáticamente correcto, pero resultar improcedente si utiliza una base o una novedad equivocada.
      p.mb-5 La proporcionalidad se aplica cuando el trabajador no tiene derecho al valor completo del periodo por ingreso, retiro, suspensión, licencia u otra novedad. Para efectos de nómina, el salario mensual se distribuye sobre una base de treinta días y los pagos parciales se reconocen de acuerdo con el tiempo efectivamente laborado (Concepto 144581 de 2022).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img41.png', alt='').m-auto
        .col-xl
          .box___style_1.color___1.fit___box_1(data-aos="fade-left")
            p Las operaciones básicas pueden expresarse de la siguiente manera:
            .box___formula.mb-3
              .row.align-items-center
                .col.p-0
                  p.mb-0.texto-right Salario diario =
                .col-auto
                  .text-center
                    p.mb-0.line--bottom salario mensual
                    p.mb-0 30
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Valor proporcional = salario diario × días reconocidos
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Valor porcentual = base de liquidación × porcentaje aplicable
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Total devengado = suma de los conceptos reconocidos
            .box___style_4.mb-3
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Total deducido = suma de las deducciones aplicadas
            .box___style_4.mb-0
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Neto por pagar = total devengado - total deducido
      p.mb-5 Estas fórmulas son expresiones pedagógicas. Antes de utilizarlas, se debe comprobar que la base, los días y el porcentaje correspondan al concepto que se está liquidando.
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img42.png')})` }")
        .bloque-texto-g__texto.p-4
          p La jornada máxima ordinaria general es de 42 horas semanales, distribuibles de común acuerdo entre cinco o seis días, con garantía del día de descanso. Por esta razón, los sistemas y hojas de cálculo deben mantener actualizado el parámetro utilizado para determinar el valor de la hora ordinaria y no conservar automáticamente divisores correspondientes a jornadas anteriores (Ley 2101 de 2021).
      p.mb-5 Los siguientes controles permiten comprobar los elementos de cada fórmula antes de aceptar el resultado de la liquidación: 
      .row.justify-content-center.mb-3
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img43.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Base
              p.mb-0.text-center Se debe confirmar que el valor corresponde al concepto liquidado. Este control previene el uso de una base salarial, prestacional o de cotización incorrecta.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img44.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Periodo
              p.mb-0.text-center Se debe establecer si se liquida un periodo completo o parcial. Esta verificación evita reconocer días que no corresponden.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img45.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Días
              p.mb-0.text-center Se deben comparar los días con las fechas de ingreso, retiro y novedades. El control permite prevenir pagos en exceso o valores que queden sin reconocer.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Horas
              p.mb-0.text-center Se debe revisar la jornada legal o contractual vigente. Esta comprobación evita calcular incorrectamente el valor de la hora.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img47.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Porcentaje
              p.mb-0.text-center Se debe verificar la tarifa aplicable al concepto y al periodo. Así se previene la aplicación de recargos, aportes o descuentos equivocados.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img48.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Vigencia
              p.mb-0.text-center Se deben confirmar el salario y las condiciones aplicables en cada fecha. El control evita utilizar valores anteriores o posteriores a su vigencia.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img49.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Decimales
              p.mb-0.text-center Se debe conservar la precisión durante las operaciones intermedias. Esto disminuye las diferencias acumuladas por redondeo.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img50.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Resultado
              p.mb-0.text-center Se debe comparar el valor con los soportes y el periodo anterior. Esta revisión permite identificar resultados atípicos antes de aprobarlos.
      p.mb-5 La aplicación conjunta de estos controles permite identificar inconsistencias en los datos y parámetros antes de generar los valores definitivos.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Un trabajador recibe un salario mensual de $2.400.000 y termina su contrato el día 18 del periodo. Para determinar el salario proporcional, se realiza el siguiente cálculo:
        .row.align-items-center.mb-3
          .col-6
            .box___style_5
              p.mb-0.text-small Salario diario
              h5.mb-0 $2.400.000 ÷ 30 = $80.000
          .col-6
            .box___style_5
              p.mb-0.text-small Salario por 18 días
              h5.mb-0 $80.000 × 18 = $1.440.000
        p.mb-0 El resultado corresponde únicamente al salario básico proporcional. Si el trabajador presenta comisiones, horas adicionales, deducciones u otras novedades, cada concepto debe calcularse por separado y adicionarse o descontarse según corresponda.
      .bg___color_2
        .px-5
          p La aproximación de valores debe aplicarse mediante un criterio uniforme. Como procedimiento técnico, es recomendable conservar los decimales durante las operaciones intermedias y aproximar los valores en la etapa definida por el sistema o por el reporte. Esto disminuye las diferencias entre la nómina individual, los totales, la contabilidad y los archivos de pago.
          p.mb-0 En síntesis, la aplicación de fórmulas exige comprobar las bases, los periodos, las jornadas y los porcentajes antes de aceptar el resultado. Estos controles permiten generar valores consistentes para la revisión de la prenómina.
          Separador
          #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.5 Depuración y revisión de la prenómina
          p.mb-5 La prenómina es el resultado preliminar de la liquidación y permite revisar los trabajadores incluidos, los días reconocidos, los devengados, las deducciones, las bases de cotización y el valor neto antes de aprobar el pago. Aunque no existe un formato único obligatorio, su revisión ayuda a comprobar que la información coincida con los datos contractuales, las novedades y los soportes del periodo (Resolución 2388 de 2016; DIAN, 2025).
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img51.png', alt='').m-auto
            .col-xl
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 La depuración debe comenzar verificando que todos los trabajadores que corresponden al periodo estén incluidos y que las fechas de ingreso, retiro, suspensión, incapacidad, licencia, vacaciones y variación salarial se encuentren correctamente registradas. Estas novedades pueden modificar los días liquidados, los pagos y los ingresos base de cotización reportados mediante la PILA (Resolución 2388 de 2016).
              .box___style_1.color___2(data-aos="fade-left")
                p.mb-0 Posteriormente, se deben comparar los valores de cada trabajador con sus soportes y con el periodo anterior. Las variaciones pueden estar justificadas por horas adicionales, comisiones, incapacidades, vacaciones, cambios salariales o deducciones; cuando no existe una causa identificable, el resultado debe revisarse antes de aprobarse. 
          p.mb-5  Los siguientes controles permiten identificar inconsistencias y determinar las acciones necesarias antes de generar la nómina definitiva: 
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Trabajadores incluidos
                      p.mb-0 Se deben comparar los trabajadores activos, los ingresos y los retiros. Si se identifica un trabajador omitido o un retirado incluido, es necesario revisar el estado y las fechas del contrato.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img52.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Días liquidados
                      p.mb-0 Se deben cotejar los días reconocidos con las novedades del periodo. Cuando exista un número mayor o menor de días, se deben verificar los ingresos, retiros, licencias y ausencias.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img53.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Salario
                      p.mb-0 Se debe comparar el valor registrado con el contrato y sus modificaciones. Si el salario está desactualizado, es necesario confirmar su vigencia y corregir el registro.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img54.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Devengados variables
                      p.mb-0 Se deben revisar las horas, los recargos, las comisiones y las bonificaciones. Ante un pago duplicado o sin soporte, se debe cotejar el concepto con la autorización correspondiente.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img55.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Deducciones
                      p.mb-0 Se deben verificar la orden, la autorización y el saldo de cada descuento. Si se identifica una deducción no autorizada o repetida, corresponde suspender o corregir el valor.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img56.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Ingreso base de cotización
                      p.mb-0 Se debe comparar la base con los pagos y las novedades. Cuando resulte inferior o superior sin justificación, es necesario reclasificar los conceptos y recalcular.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img57.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Neto por pagar
                      p.mb-0 Se deben identificar valores negativos, nulos o atípicos. Si las deducciones superan el devengado, corresponde revisar los conceptos aplicados.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img58.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Cuenta bancaria
                      p.mb-0 Se deben confirmar la titularidad y los cambios recientes. Ante el riesgo de un pago rechazado o dirigido a otra cuenta, es necesario validar la certificación bancaria.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img59.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Variación entre periodos
                      p.mb-0 Se deben comparar los valores individuales y totales. Cuando exista un cambio elevado sin una novedad que lo justifique, es necesario identificar y documentar la causa.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img58.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Totales
                      p.mb-0 Se deben comprobar el devengado, las deducciones y el neto. Si existen diferencias entre reportes, corresponde conciliar y corregir los resultados.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img59.png', alt='' style="max-width: 500px").m-auto
      p Estos controles permiten relacionar cada diferencia con su causa y aplicar la corrección correspondiente antes de aprobar el pago.
      p.mb-5 Los cambios de cuenta bancaria y los demás datos personales deben validarse mediante soportes y canales seguros. La información de nómina está sometida a los principios de seguridad y confidencialidad, por lo que deben aplicarse medidas para evitar su pérdida, modificación, consulta o utilización no autorizada.
      .box___style_3(data-aos="zoom-in").mb-5
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h5.mb-0 Ejemplo aplicado
        p Al revisar la prenómina, una empresa identifica que un trabajador activo no aparece en el reporte, una comisión fue incluida en el devengado, pero no en el IBC, y una cuota de préstamo se registró dos veces. Antes de aprobar la nómina, debe revisar el estado del trabajador, establecer la naturaleza salarial de la comisión y comparar la deducción con la autorización y el saldo pendiente.
        p.mb-0 Las correcciones deben conservar el dato inicial, la causa de la diferencia, el valor ajustado, la fecha, el responsable y el soporte correspondiente. Cuando la información ya fue transmitida, también debe analizarse si procede corregir la PILA o generar una nota de ajuste del documento soporte de pago de nómina electrónica (DIAN, 2025).
      p.mb-0 En conclusión, la revisión de la prenómina permite detectar errores antes del pago y comprobar la coherencia entre trabajadores, novedades, bases, deducciones y valores netos. Su aprobación proporciona información depurada para generar la nómina definitiva, los comprobantes y los reportes correspondientes.

</template>

<script>
export default {
  name: 'Tema1',
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
