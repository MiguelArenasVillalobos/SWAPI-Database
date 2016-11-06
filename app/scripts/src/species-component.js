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
