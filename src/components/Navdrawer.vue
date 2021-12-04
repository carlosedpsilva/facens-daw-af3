<template>
  <v-navigation-drawer absolute permanent left>
    <v-list fluid fill-height>
      <v-list-item dense nav>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> facens-daw-af3 </v-list-item-title>
          <v-list-item-subtitle> Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in $store.state.items" :key="item.title" :to="{ path: item.to }">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>
