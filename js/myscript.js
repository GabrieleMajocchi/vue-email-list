// ---Vue app---
const {createApp} = Vue
createApp ({
    data () {
        return{
            emails: [],
        }
    },

    methods: {
        
        // ---Versione che fa richieste finchè non abbiamo 10 email diverse---
        async randomEmails(){
            for(let i= 0; i<20; i++){
                // ---Aspetto la risposta dal server---
                await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    const result = response.data.response;
                    // ---Pusho l'email solo se diversa da quelle già presenti nell'array---     
                    if(!this.emails.includes(result)){
                        this.emails.push(result)
                    }
                    // ---Arrivato a 10 email diverse nell'array fermo il ciclo for---
                    if(this.emails.length >= 10){
                        i=19
                    }
                });
            }
        },

        // ---Versione che fa 20 richieste ma ne pusha solo 10 nell'array e le altre 10 le butta---
        // async randomEmails(){
        //     for(let i= 0; i<20; i++){
        //         // ---Aspetto la risposta dal server---
        //         await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //         .then( (response) => {
        //             const result = response.data.response;       
        //             // ---Pusho l'email solo se diversa da quelle già presenti nell'array e la lunghezza dell'array è inferiore a 10---
        //             if(!this.emails.includes(result) && this.emails.length < 10){
        //                 this.emails.push(result)
        //             }
        //         });
        //     }
        // },
        
    },

    created(){
        this.randomEmails()
    },

}).mount ("#app")