<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p La liquidación de nómina es un proceso esencial para reconocer de manera correcta y oportuna los derechos económicos de los trabajadores y cumplir las obligaciones laborales asumidas por el empleador. Su ejecución requiere utilizar los datos contractuales, salariales y de afiliación previamente verificados, interpretar las novedades del periodo y aplicar procedimientos de cálculo que permitan establecer con precisión los valores devengados, deducidos y pagados.
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El proceso no termina con la determinación del valor neto que recibe el trabajador. También comprende el cálculo de los aportes al Sistema de Seguridad Social Integral, los aportes parafiscales, las retenciones, los embargos y las demás obligaciones destinadas a terceros. Además, incluye la elaboración de comprobantes, la generación de la nómina electrónica, la contabilización de gastos y obligaciones, y la conciliación de la información con la PILA, los registros contables y los movimientos bancarios.
      .box___color-text-iconright.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl.col-md-10.order-2.order-lg-1
            p.mb-0 El desarrollo de situaciones prácticas permite analizar salarios, jornadas, horas extras, incapacidades, licencias, vacaciones, prestaciones sociales y terminaciones contractuales. De igual manera, facilita la identificación de errores, la realización de reliquidaciones y ajustes, la conservación de la trazabilidad de los cambios y la protección de los soportes generados. Estos procedimientos contribuyen a ejecutar la nómina con criterios de exactitud, transparencia, seguridad de la información y cumplimiento normativo.
          .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 170px").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
