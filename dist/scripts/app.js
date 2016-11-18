Vue.component('starwars-character-selection', {
    props: ['dataUrl'],
    data: function() {
        return {
            characters: [],
            character: null
        }
    },
    events: {},
    watch: {
        character: function() {
            bus.$emit('starwars-character-selection', this.character);
            console.log('Vue-component respond!', this.character);
        }
    },
    created: function() {
        this.retrieveCharacters();
    },
    methods: {
        retrieveCharacters: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', this.dataUrl);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                self.characters = data.results;
            };
            xhr.send();
        }
    },
    template: '<select v-model="character">\
    <option v-for="person in characters" v-bind:value="person">\
    {{ person.name }}\
    </option>\
    </select>'
});

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

Vue.component('starwars-planet-selection', {
    props: ['dataUrl'],
    data: function() {
        return {
            planets: [],
            planet: null
        }
    },
    events: {},
    watch: {
        planet: function() {
            bus.$emit('starwars-planet-selection', this.planet);
            console.log('Vue-component respond!', this.planet);
        }
    },
    created: function() {
        this.retrievePlanets();
    },
    methods: {
        retrievePlanets: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', this.dataUrl);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                self.planets = data.results;
            };
            xhr.send();
        }
    },
    template: '<select v-model="planet">\
    <option v-for="planet in planets" v-bind:value="planet">\
    {{ planet.name }}\
    </option>\
    </select>'
});

Vue.component('starwars-species-selection', {
    props: ['dataUrl'],
    data: function() {
        return {
            speciess: [],
            species: null
        }
    },
    events: {},
    watch: {
        species: function() {
            bus.$emit('starwars-species-selection', this.species);
            console.log('Vue-component respond!', this.species);
        }
    },
    created: function() {
        this.retrieveSpeciess();
    },
    methods: {
        retrieveSpeciess: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', this.dataUrl);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                self.speciess = data.results;
            };
            xhr.send();
        }
    },
    template: '<select v-model="species">\
    <option v-for="species in speciess" v-bind:value="species">\
    {{ species.name }}\
    </option>\
    </select>'
});

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
