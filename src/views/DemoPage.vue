<template>
  <div id="app">
    <title-card :isDemo="true" />

    <v-container pa-0>
      <v-form ref="demo">
        <form-card
          :wavId="this.pickRandomItem()"
          :index="this.index"
          :rules="radioRules"
          :isDemo="true"
        />
        <form-card
          :wavId="this.pickRandomItem()"
          :index="this.index"
          :rules="radioRules"
          :isDemo="true"
        />
        <form-card
          :wavId="this.pickRandomItem()"
          :index="this.index"
          :rules="radioRules"
          :isDemo="true"
        />

        <v-card
          class="mx-auto mt-4 pa-0"
          color="background"
          max-width="640"
          flat
        >
          <v-btn color="primary" @click="toForm">本番へ</v-btn>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import TitleCard from "@/components/TitleCard.vue";
import FormCard from "@/components/FormCard.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    TitleCard,
    FormCard,
  },
  data() {
    return {
      index: -1,
      radioRules: [(value) => !!value || "※必須属性です"],
    };
  },
  computed: {
    ...mapState("pagination", ["items", "totalItem"]),
  },
  created() {
    this.calctotalItem();
    this.calcTotalPage();
  },

  methods: {
    ...mapMutations("pagination", ["calctotalItem", "calcTotalPage"]),
    toForm() {
      if (this.$refs.demo.validate()) {
        this.$router.push("/form");
      }
    },
    pickRandomItem() {
      const rand = Math.floor(Math.random() * this.totalItem);
      console.log(Object.keys(this.items)[rand]);
      return Object.keys(this.items)[rand];
    },
  },
};
</script>
