<template>
  <div>
    <v-card
      class="mx-auto mt-4 pa-0 rounded-lg"
      color="background"
      max-width="640"
      flat
    >
      <v-btn
        color="primary--text"
        elevation="1"
        @click="pushPrev"
        v-if="!isFirstPage()"
      >
        戻る</v-btn
      >
      <v-btn
        color="primary--text"
        elevation="1"
        @click="pushNext"
        v-if="!isLastPage()"
      >
        次へ</v-btn
      >
      <v-btn color="primary" @click="pushSend" v-if="isLastPage()"> 送信</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("pagination", ["curPage", "totalPage"]),
  },

  methods: {
    pushPrev() {
      this.$emit("pushPrev");
    },
    pushNext() {
      this.$emit("pushNext");
    },

    pushSend() {
      this.$emit("pushSend");
    },

    isLastPage() {
      return this.curPage == this.totalPage;
    },
    isFirstPage() {
      return this.curPage == 1;
    },
  },
};
</script>
