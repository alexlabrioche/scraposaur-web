<template>
  <v-app>
    <v-app-bar app flat color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Vue logo"
          src="./assets/logo.png"
          max-height="50"
          max-width="50"
        />
      </div>
      <h3 class="ml-4">Scraposaur</h3>
      <v-spacer />
      <v-btn href="https://github.com/alexlabrioche" target="_blank" text>
        <span class="mr-2">alexlabrioche</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="font-weight-bold my-8">Cherchez une entreprise</h1>
        <Search />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    Search,
  },
};
</script>
