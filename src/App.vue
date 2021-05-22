<template>
  <v-app>
    <v-navigation-drawer app permanent expand-on-hover>
      <v-list>
        <!--        <v-list-item class="px-2">-->
        <!--          <v-list-item-avatar>-->
        <!--            <v-img-->
        <!--              src="https://randomuser.me/api/portraits/women/85.jpg"-->
        <!--            ></v-img>-->
        <!--          </v-list-item-avatar>-->
        <!--        </v-list-item>-->

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Admin</v-list-item-title>
            <v-list-item-subtitle>v.admin@vinbigdata.org</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-newspaper-variant-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Posts</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-spider-thread</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Crawler</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="VinBase Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo-vinbase.svg')"
          transition="scale-transition"
        />
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
