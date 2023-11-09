<!-- src/components/MovieItem.vue -->

<template>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title text-primary">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <p class="card-text"><small class="text-muted">{{ movie.genre }}</small></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object,
    },
};
</script>

<style scoped>
.card {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
}

.card-title {
    font-size: 1.25rem;
}
</style>
