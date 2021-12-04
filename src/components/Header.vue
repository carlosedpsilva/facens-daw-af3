<template>
  <div>
    <v-system-bar height="30" dark color="purple darken-4">
      <v-row align="center" justify="center">
        <span>v-system-bar</span>
      </v-row>
    </v-system-bar>

    <v-app-bar dense dark color="deep-purple accent-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>v-app-bar</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        v-for="item in $store.state.items"
        :key="item.title"
        :to="{ path: item.to }"
        color="transparent"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
