Vue.component('starwars-movie-selection', {
    props: ['dataUrl'],
    data: function() {
        return {
            movies: [],
            movie: null
        }
    },
    events: {},
    watch: {
        movie: function() {
            bus.$emit('starwars-movie-selection', this.movie);
            console.log('Vue-component respond!', this.movie);
        }
    },
    created: function() {
        this.retrieveMovies();
    },
    methods: {
        retrieveMovies: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', this.dataUrl);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                self.movies = data.results;
            };
            xhr.send();
        }
    },
    template: '<select v-model="movie">\
    <option v-for="movie in movies" v-bind:value="movie">\
    {{ movie.title }}\
    </option>\
    </select>'
});
