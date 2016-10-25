// Add your JavaScript here!
var app = new Vue({
    el: '#app',
    data: {
        character: null
    },
    computed: {},
    watch: {},
    created: function() {
        var self = this;

        bus.$on('starwars-character-selection', function(character) {
            self.character = character;
            console.log('Vue-instance respond!', self.character);
        });
    },
    events: {},
    methods: {}
});
