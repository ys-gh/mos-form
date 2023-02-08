<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-main>
      <router-view />

      <v-card
        class="mx-auto mt-0 pb-4 rounded-lg"
        color="background"
        max-width="640"
        flat
      >
        <!-- google form like -->
        <!-- <v-card-text>
          <v-row>
            <v-col>
              <div style="font-size: 12px">
                このコンテンツはGoogleが作成または承認したものではありません。
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" style="font-size: 25px">
            <div>MOS評価フォーム</div>
          </v-row>
        </v-card-text> -->
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
