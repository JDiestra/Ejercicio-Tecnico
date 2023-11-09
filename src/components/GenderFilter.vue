<!-- src/components/GenderFilter.vue -->

<template>
  <div class="form-group">
    <label for="genre">Género:</label>
    <b-form-select v-model="selectedGenre" @change="handleFilterMovies" class="form-control">
      <option value="">Todos</option>
      <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  props: {
    genres: Array,
    filterMovies: Function,
    resetTitleFilter: Function,
  },
  data() {
    return {
      selectedGenre: '',
    };
  },
  methods: {
    handleFilterMovies() {
      this.filterMovies({
        genre: this.selectedGenre,
      });
      this.resetTitleFilter();
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
