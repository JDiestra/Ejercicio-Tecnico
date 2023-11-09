<!-- src/components/MovieList.vue -->

<template>
    <div>
        <MovieItem v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
    components: {
        MovieItem,
    },
    props: {
        movies: Array,
        filteredMovies: Array,
    },
};
</script>

<style scoped>
/* */
</style>
