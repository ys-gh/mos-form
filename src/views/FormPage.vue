<template>
  <div id="app">
    <title-card :isDemo="false" />

    <v-container pa-0>
      <v-form :ref="curPage" v-model="valid">
        <div v-for="(item, index) in this.slicedItems" :key="item">
          <form-card :wavId="item" :index="index" :rules="radioRules" />
        </div>
        <form-buttons
          @pushNext="pushNext"
          @pushPrev="pushPrev"
          @pushSend="pushSend"
        />
      </v-form>
    </v-container>
  </div>
</template>

<script>
import TitleCard from "@/components/TitleCard.vue";
import FormCard from "@/components/FormCard.vue";
import FormButtons from "@/components/FormButtons.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { db } from "../main.js";
import { collection, setDoc, doc } from "firebase/firestore";

export default {
  components: {
    TitleCard,
    FormCard,
    FormButtons,
  },

  data() {
    return {
      valid: true,
      radioRules: [(value) => !!value || "※必須属性です"],
    };
  },
  computed: {
    ...mapState("pagination", [
      "curPage",
      "perPage",
      "totalPage",
      "totalItem",
      "items",
    ]),
    ...mapState("formdata", ["formAnswers"]),

    ...mapGetters("pagination", ["slicedItems"]),
  },
  created() {
    this.calctotalItem();
    this.calcTotalPage();
    this.createMethodSet();
    window.addEventListener("beforeunload", this.confirmSave);
  },
  destroyed() {
    window.removeEventListener("beforeunload", this.confirmSave);
  },
  methods: {
    ...mapMutations("pagination", [
      "calctotalItem",
      "calcTotalPage",
      "prev",
      "next",
    ]),
    ...mapMutations("formdata", ["createMethodSet"]),
    confirmSave(event) {
      event.returnValue = "編集中のものは保存されませんが、よろしいですか？";
    },

    pushPrev() {
      this.prev();
    },
    pushNext() {
      if (this.$refs[this.curPage].validate()) {
        this.next();
      }
    },
    pushSend() {
      if (this.$refs[this.curPage].validate()) {
        Object.keys(this.formAnswers).forEach((method) => {
          const docRef = doc(collection(db, method));
          setDoc(docRef, this.formAnswers[method]);
        });
        this.$router.push("/posted");
      }
    },
  },
};
</script>
