<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-text-field
        label="Nom de l'entreprise"
        placeholder="Acme Corp."
        prepend-icon="mdi-archive-search-outline"
        append-icon="mdi-close"
        :value="search"
        @input="updateSearch"
        @click:append="resetSearch"
      ></v-text-field>
    </v-col>
    <v-row>
      <v-col cols="12">
        <v-btn outlined plain @click="getCompanyInfos" color="primary"
          >Rechercher</v-btn
        >
        <h5 v-if="isLoading">Chargement...</h5>
      </v-col>
      <v-row v-if="result" class="mt-8">
        <v-alert v-if="result.code" color="red" outlined type="error"
          >{{ result.code }} - {{ result.message }}</v-alert
        >
        <v-col cols="12">
          <h4>{{ result.name }}</h4>
          <br />
          <span>{{ result.legalForm }}</span>
          <br />
          <span>{{ result.employees }}</span>
          <br />
          <span>{{ result.address }}</span>
          <br />
          <span>{{ result.capital }}</span>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Search",
  computed: mapState(["search", "isLoading", "result"]),
  methods: mapActions(["updateSearch", "resetSearch", "getCompanyInfos"]),
};
</script>
