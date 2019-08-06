<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp" 
    app 
    color="primary" 
    dark 
    extended
    extension-height="60"
    >
    <v-app-bar-nav-icon @click.stop="toggleNavigator"></v-app-bar-nav-icon>
    <v-img contain src="/images/logo-on-dark.png" max-width="100" max-height="60"></v-img>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-folder-search-outline"
      label=" search by project name, number or address"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-badge overlap color="error">
        <template v-slot:badge>1</template>
        <v-icon>mdi-bell-alert-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    toggleNavigator () {
      this.$store.dispatch('layout/toggleNavigator');
    }
  }
};
</script>
