<template>
  <v-app>
    <v-main>
      <app-header />

      <v-card style="height: calc(100vh - 182px)">
        <app-drawer />
        <div class="content">
          <router-view></router-view>
        </div>
      </v-card>

      <app-footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Navdrawer from '@/components/Navdrawer.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-drawer': Navdrawer,
    'app-footer': Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.content {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  width: calc(100vw - 273px);
  margin-left: 256px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
