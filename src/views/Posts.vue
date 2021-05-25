<template>
  <v-container>
    <v-row class="mt-1">
      <h1>Manage Posts</h1>
    </v-row>
    <v-row class="mt-10">
      <v-data-table
        :headers="headers"
        :items="list"
        item-key="_id"
        class="flex elevation-2"
        :search="search"
        :loading="isLoading"
        :server-items-length="count"
        :options.sync="options"
      >
        <template v-slot:top>
          <v-text-field
            label="Type to search..."
            class="mx-4"
            @input="debounceSearch"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import debounce from "lodash/debounce";

export default Vue.extend({
  name: "Posts",

  computed: {
    headers() {
      return [
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Source",
          value: "source",
        },
        {
          text: "Url",
          value: "url",
        },
        {
          text: "Categories",
          value: "categories",
        },
        {
          text: "Tags",
          value: "tags",
        },
      ];
    },
  },

  data: () => ({
    count: 0,
    isLoading: false,
    list: [],
    options: {},
    search: "",
  }),

  methods: {
    async getList(options, search = "") {
      this.isLoading = true;
      const response = await this.$axios.get("/posts", {
        params: {
          limit: options.itemsPerPage,
          skip: (options.page - 1) * options.itemsPerPage,
          search: search,
        },
      });
      this.list = response.data.list;
      this.count = response.data.count;
      this.isLoading = false;
    },
    debounceSearch: debounce(function (value) {
      this.search = value;
    }, 500),
  },

  watch: {
    async options(value) {
      await this.getList(value);
    },
    async search(value) {
      await this.getList(this.options, value);
    },
  },
});
</script>

<style scoped></style>
