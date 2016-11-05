// Add your JavaScript here!
var app = new Vue({
    el: '#app',
    data: {
        character: null,
        movie: null
    },
    computed: {},
    watch: {},
    created: function() {
        var self = this;

        bus.$on('starwars-character-selection', function(character) {
            self.character = character;
            console.log('Vue-instance respond!', self.character);
        });

        bus.$on('starwars-movie-selection', function(movie) {
            self.movie = movie;
            console.log('Vue-instance respond!', self.movie);
        });
    },
    events: {},
    methods: {}
});
