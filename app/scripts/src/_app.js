let bus = new Vue();

var app = new Vue({
    el: '#app',
    data: {
        character: null,
        movie: null,
        species: null,
        planet: null
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

        bus.$on('starwars-species-selection', function(species) {
            self.species = species;
            console.log('Vue-instance respond!', self.species);
        });

        bus.$on('starwars-planet-selection', function(planet) {
            self.planet = planet;
            console.log('Vue-instance respond!', self.planet);
        });
    },
    events: {},
    methods: {}
});
