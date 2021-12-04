<template>
  <div style="margin: 10px">
    <v-row justify="center" class="my-4">
      <div class="text-lg-h6">{{title}}</div>
    </v-row>
    <v-row justify="center" class="my-4">
      <v-btn color="primary" :disabled="fetched" @click="fetch()">FETCH CATS</v-btn>
    </v-row>
    <v-row>
      <v-col v-for="(cat, i) in cats" :key="i">
        <v-card align="center">
          <v-card-subtitle>ID: {{ cat.id }}</v-card-subtitle>
          <img :src="cat.img" alt="cat" style="max-height: 200px" />
          <v-card-subtitle>Tags: {{ cat.tags }}</v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-btn
              v-if="cat.hearted"
              rounded depressed dark color="pink" @click="heart(cat.id)"> Heart </v-btn>
            <v-btn
              v-if="!cat.hearted"
              outlined rounded text @click="heart(cat.id)"> Heart </v-btn>
            <v-btn outlined rounded text> Open </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    title() { return this.$store.state.dashboard.title; },
    cats() { return this.$store.state.dashboard.content; },
    fetched() { return this.$store.state.dashboard.fetched; },
  },
  methods: {
    async fetch() { await this.$store.dispatch('fetchCats'); },
    heart(id) { this.$store.commit('heartCat', id); },
  },
};
</script>
