<template>
  <div>
    <v-card class="mx-auto mt-4 pa-6 rounded-lg" max-width="640">
      <v-card-title>{{ this.questionId }}/{{ this.totalItem }}</v-card-title>

      <!-- <audio :src="require(`../${this.audioPath}`)" controls></audio> -->
      <vuetify-audio
        :file="require(`../${this.audioPath}`)"
        color="primary"
        flat
      ></vuetify-audio>
      <br />

      <v-row justify="center">
        <v-radio-group v-if="isDemo" :rules="rules" row>
          <v-radio label="1" value="1" required />
          <v-radio label="2" value="2" />
          <v-radio label="3" value="3" />
          <v-radio label="4" value="4" />
          <v-radio label="5" value="5" />
        </v-radio-group>

        <v-radio-group
          v-else
          v-model="formAnswers[methodName][questionId]"
          :rules="rules"
          row
        >
          <v-radio label="1" value="1" required />
          <v-radio label="2" value="2" />
          <v-radio label="3" value="3" />
          <v-radio label="4" value="4" />
          <v-radio label="5" value="5" />
        </v-radio-group>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "FormCard",
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
  },
  props: {
    wavId: String,
    index: Number,
    rules: Array,
    isDemo: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("pagination", ["curPage", "perPage", "items", "totalItem"]),
    ...mapState("formdata", ["formAnswers"]),

    questionId() {
      return this.perPage * (this.curPage - 1) + this.index + 1;
    },
    audioPath() {
      return this.items[this.wavId].path;
    },
    methodName() {
      return this.items[this.wavId].method;
    },
  },

  methods: {
    ...mapMutations("formdata", ["updateFormAnswer"]),
  },
  watch: {
    formAnswers: {
      handler(value) {
        Object.entries(value).forEach(([id, answer]) => {
          this.updateFormAnswer({
            methodName: this.methodName,
            id,
            answer,
          });
        });
      },
    },
  },
};
</script>

