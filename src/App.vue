<template>
  <v-app>
    <navigator />
    <appBar />
    <v-content>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import Navigator from "./components/Navigator";
import AppBar from "./components/AppBar";
export default {
  components: {
    Navigator,
    AppBar
  }
};
</script>