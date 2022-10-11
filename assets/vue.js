// @ts-nocheck
new Vue( {
    el: '#app',

    data () {
        return {
            arrayMail: []
        }
    },

    methods: {
        go10Mail () {
            this.arrayMail = [];

            for ( let i = 0; i < 10; i++ ) {
                axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
                    .then( ( res ) => this.arrayMail.push( res.data.response ) );
            }
        }
    },

    beforeMount () {
        this.go10Mail();
    },
} );