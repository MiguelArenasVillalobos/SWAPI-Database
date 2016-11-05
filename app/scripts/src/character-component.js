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
