<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre liquidación, pago y control de nómina',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar su capacidad para aplicar procedimientos de liquidación de devengados y deducciones, calcular aportes y pagos a terceros, revisar la PILA, controlar el pago, reconocer su contabilización, conciliar la información y gestionar ajustes y soportes.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué debe verificar usted antes de generar la prenómina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el archivo bancario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Datos contractuales, novedades y afiliaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo los gastos contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente los reportes electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué debe conservar usted al modificar el salario de un trabajador?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el salario nuevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fecha de vigencia y el soporte del cambio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente el comprobante bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El valor anterior sin fecha.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo debe tratar usted las bases de liquidación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar una base única para todos los conceptos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar siempre el salario neto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar la base correspondiente a cada concepto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizar únicamente la base parafiscal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe hacer usted ante una novedad recibida después del cierre?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitirla definitivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pagarla sin revisar el soporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar todos los reportes automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar su efecto y aplicar la corrección correspondiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe comprobar usted durante la revisión de la prenómina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Días, fórmulas, porcentajes y conceptos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el número de cuentas bancarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente los pagos del periodo anterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo los documentos archivados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe identificar usted para liquidar remuneración variable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el salario básico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los conceptos causados y sus soportes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo las deducciones autorizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El saldo de la cuenta bancaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué debe verificar usted al liquidar horas extras y recargos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el cargo del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el salario neto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La jornada, el tiempo trabajado y el recargo aplicable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo la periodicidad del pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué debe revisar usted ante una incapacidad o licencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El soporte, las fechas y el tratamiento de la novedad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el valor del salario básico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el reporte bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de todas las deducciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué debe distinguir usted al calcular vacaciones y prestaciones sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el centro de costo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cuenta bancaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor neto como base universal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las bases y reglas aplicables a cada concepto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe incluir usted en la revisión de una liquidación final?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el último salario básico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Salarios, prestaciones, vacaciones y demás valores pendientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente los aportes patronales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo las transferencias bancarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cómo debe determinar usted el neto de nómina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sumando devengados y deducciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restando los aportes patronales del salario básico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restando las deducciones del total devengado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sumando el IBC y las provisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe hacer usted con los aportes descontados al trabajador?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separarlos de las obligaciones exclusivas del empleador.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrarlos como salario adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transferirlos directamente al trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitirlos de la PILA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué soporte debe verificar usted antes de aplicar una deducción salarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente una solicitud verbal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el comprobante de pago anterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una instrucción informal del área contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ley, una orden judicial o una autorización válida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe comprobar usted al liquidar aportes patronales y parafiscales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el neto del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las bases, tarifas y obligaciones aplicables al empleador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo los descuentos de libranza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El valor de las vacaciones disfrutadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué debe comparar usted al revisar la PILA?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el total de transferencias bancarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente los gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajadores, novedades, días, IBC y aportes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo las retenciones tributarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe conservar usted al realizar pagos a terceros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El beneficiario, valor, periodo y soporte de la transferencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el valor total de nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el nombre del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El archivo bancario sin identificación del beneficiario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué debe comprobar usted antes de autorizar el pago de nómina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la fecha de apertura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el número de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo los saldos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los totales, variaciones, excepciones y soportes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué debe reconocer usted contablemente por beneficios laborales causados y pendientes de pago?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente una salida bancaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El gasto y la obligación correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo una disminución de ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente el neto transferido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe hacer usted si un pago bancario es rechazado y la liquidación es correcta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el devengado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Duplicar la nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar la obligación pendiente y efectuar posteriormente el pago.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar el salario pactado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe analizar usted si detecta un error en un documento de nómina electrónica ya transmitido?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La generación de la nota de ajuste correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de todos los soportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cambio automático de todas las bases.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La suspensión de todos los pagos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
