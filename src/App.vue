<!-- src/App.vue -->

<template>
  <div id="app" class="container mt-4">
    <GenderFilter :genres="genres" :filterMovies="filterMovies" :resetTitleFilter="resetTitleFilter" />
    <TitleFilter :titles="titles" :filterMovies="filterMovies" :resetGenreFilter="resetGenreFilter" />
    <MovieList :filteredMovies="filteredMovies" />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue';
import GenderFilter from './components/GenderFilter.vue';
import TitleFilter from './components/TitleFilter.vue';
import axios from './axios';

export default {
  components: {
    MovieList,
    GenderFilter,
    TitleFilter,
  },
  data() {
    return {
      movies: [],
      filteredMovies: [],
      genres: ["Drama", "Action", "Crime"],
      titles: [], // Array para almacenar títulos
      selectedGenre: '',
      selectedTitle: '',
    };
  },
  methods: {
    async loadMovies() {
      try {
        const response = await axios.get('/movies.json');
        this.movies = response.data.movies;
        this.filteredMovies = this.movies;
        this.titles = [...new Set(this.movies.map(movie => movie.title))];
      } catch (error) {
        console.error('Error al cargar las películas', error);
      }
    },
    filterMovies(filter) {
      const { genre, title } = filter;
      this.selectedGenre = genre;
      this.selectedTitle = title;

      this.filteredMovies = this.movies.filter((movie) => {
        return (
          (this.selectedGenre === '' || movie.genre === this.selectedGenre) &&
          (this.selectedTitle === '' || movie.title === this.selectedTitle)
        );
      });
    },
    resetTitleFilter() {
      this.selectedTitle = '';
      this.filterMovies({ genre: this.selectedGenre, title: this.selectedTitle });
    },
    resetGenreFilter() {
      this.selectedGenre = '';
      this.filterMovies({ genre: this.selectedGenre, title: this.selectedTitle });
    },
  },
  created() {
    this.loadMovies();
  },
};
</script>

<style scoped>
/**/
</style>
