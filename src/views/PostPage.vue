<template>
  <v-card class="mx-auto mt-4 pa-0 rounded-lg" max-width="640">
    <div class="primary" style="height: 15px">
      <br />
    </div>

    <v-card-title style="font-weight: 500; font-size: 30px"
      >音声自然性評価実験</v-card-title
    >

    <v-divider class="mx-auto"> </v-divider>
    <v-card-text>
      <div>正常に送信されました。ご協力ありがとうございました。</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    next(false);
  },
};
</script>

