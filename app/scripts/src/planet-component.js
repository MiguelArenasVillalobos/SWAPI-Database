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
