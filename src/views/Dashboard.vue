<template>
  <v-container fluid>
    <h1 class="mb-4">
      Welcome {{ name }}
    </h1>
    <v-flex md4>
      <v-text-field
        v-model="name"
        label="Enter name"
        outlined
      />
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    name: "Lane"
  }),
}
</script>