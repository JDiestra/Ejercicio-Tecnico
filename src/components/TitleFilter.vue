<!-- src/components/TitleFilter.vue -->

<template>
    <div class="form-group">
        <label for="title">Título:</label>
        <b-form-select v-model="selectedTitle" @change="handleFilterMovies" class="form-control">
            <option value="">Todos</option>
            <option v-for="title in titles" :key="title" :value="title">{{ title }}</option>
        </b-form-select>
    </div>
</template>

<script>
export default {
    props: {
        titles: Array,
        filterMovies: Function,
        resetGenreFilter: Function,
    },
    data() {
        return {
            selectedTitle: '',
        };
    },
    methods: {
        handleFilterMovies() {
            this.filterMovies({
                title: this.selectedTitle,
            });
            this.resetGenreFilter();
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
