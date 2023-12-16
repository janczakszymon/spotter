<template>
  <NuxtLayout>
    <v-row class="row">
      <v-col cols="8">
        <PostComponent content="Dodawanie here"></PostComponent>
      </v-col>
      <v-col cols="4">
        <PostComponent content="filtry here"></PostComponent>
      </v-col>
      <v-col v-for="(post, i) in posts" :key="i" cols="3" class="col">
        <PostComponent :content="post"></PostComponent>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script setup lang="ts">
import PostComponent from "~/components/Posts/PostComponent.vue";

const posts = [
  "Dzień dobry ! \n" +
  "Czy ktoś w Lublińcu lub okolicy prowadzi zajęcia z terapii Tomatisa ?",
  "dzień dobry, pracownik InPostu obsługujący paczkomat przy galerii jedenastka pomylił etykiety, do mojej klientki dotarło inne zamówienie. Jeśli ktoś wysyłał nietypowe bombki z tego paczkomatu to proszę o pozostawienie kontaktu do siebie.\n" +
  "Wszystkie reakcje:\n",
  'witam, czy w Lublińcu lub okolicy dostanę płyty winylowe?',
  'Witam\n' +
  'Zbieram zamówienia na domowej roboty pierogi ruskie.z kapustą i grzybami 25 zł za kg.z mięsem 30 zł za kg.z serem 25 zł za kg.🌲🎄uszka z. Grzybami , z mięsem 45 zł za kg \n' +
  'Kluski śląskie i kopytka',
  'Proszę o polecenie dobrego laryngologa, który znajdzie przyczynę i wyeliminuje chrapanie. Najlepiej okolice Lublinca.',
  'Godny polecenia alergolog dziecięcy? Lubliniec i okolice?',
  'Gdzie kupie okleinę samo przylepna na meble',
  'Dzień Dobry. \n' +
  'Właściciele działek na nowo powstałym osiedlu ul.   Stanisława Hadyny czy jesteście zainteresowani nitką gazu obok waszych działek ????',
  'Szukam rehabilitanta -rehabilitantki  ktory jest mobilny i może dojechać do domu ...'
]
</script>

<style scoped lang="scss">
.row {
  padding: 10px 20px;
}

.v-col {
  padding: 10px;
}
</style>