// ---Vue app---
const {createApp} = Vue
createApp ({
    data () {
        return{
            emails: [],
        }
    },

    methods: {
        
    },

    created(){
        // ? quando l'applicazione è stata creata e ancora non è montata
        // this.getNewRandomNumber();
        for(let i= 0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            // § se e quando il server risponde
            const result = response.data.response;
            this.emails.push(result)
        });
        }
    },
}).mount ("#app")