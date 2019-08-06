<template>
  <v-container fluid>
    <v-layout>
      <v-flex md1 />
      <v-flex md10>
        <h1 class="headline mt-5 mb-5">
          My projects
        </h1>
        <v-card>
          <v-list
            two-line
          >
            <div
              v-for="item in items"
              :key="item.id"
            >
              <v-list-item>
                <v-list-item-avatar color="red">
                  <span class="white--text subtitle-1">01</span>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.NAME" />
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.TYPE"
                  />
                  <v-list-item-subtitle v-text="item.PHONE" />
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text>#{{ item.ID }}</v-list-item-action-text>
                  <v-icon color="grey lighten-1">
                    mdi-star-outline
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider inset />
            </div>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex md1 />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ProjectList",
  data: () => ({
    items: []
  }),
  mounted() {
    const projects = require("@/assets/projects.json");
    this.items = projects.projectList.projectList;
  }
};
</script>
