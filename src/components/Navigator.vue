<template>
  <v-navigation-drawer
    v-model="isOpen"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <v-list-item @click="$router.push('/dashboard')">
        <v-list-item-action>
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="$router.push('/')">
        <v-list-item-action>
          <v-icon>mdi-folder-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navigator",
  data: () => ({
    drawer: true
  }),
  computed: {
    ...mapGetters("layout", {
      isOpen: "isNavigatorOpen"
    })
  }
};
</script>