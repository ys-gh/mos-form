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
      <div>
        <span style="color: red" v-if="isDemo"
          >最初のページはデモページです。入力は送信されません。</span
        ><br />
        進め方: 各設問で再生ボタンを押すと、音声が流れます。流れた音声の
        品質について「1: 非常に悪い、2: 悪い、3: 普通、4: 良い、5: 非常に良い」
        の中から最も適切だと感じるものを選択してください。
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TitleCard",

  props: {
    isDemo: Boolean,
  },
};
</script>
