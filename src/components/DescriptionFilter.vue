<!-- src/components/DescriptionFilter.vue -->

<template>
    <div class="form-group">
        <label for="description">Descripción:</label>
        <b-form-select v-model="selectedDescription" @change="handleFilterMovies" class="form-control">
            <option value="">Todas</option>
            <option v-for="description in descriptions" :key="description" :value="description">{{ description }}</option>
        </b-form-select>
    </div>
</template>

<script>
export default {
    props: {
        descriptions: Array,
        filterMovies: Function,
        resetTitleFilter: Function,
        resetGenreFilter: Function,
    },
    data() {
        return {
            selectedDescription: '',
        };
    },
    methods: {
        handleFilterMovies() {
            this.filterMovies({
                description: this.selectedDescription,
            });
            this.resetTitleFilter();
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
