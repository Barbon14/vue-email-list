// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// instanza Vue
var app = new Vue({
    el : '#app',
    data : {

        // array di stringhe (indirizzi mail generati dal API)
        mailList : [],

        // lunghezza array desiderata
        eleNum : 10,
    },

    mounted() {
        const self = this;

        for (let i = 0; i < self.eleNum; i++) {

            // riachiamo API
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( function (element) {
                let mail = element.data.response;

                // aggiungo la mail generata all'array
                self.mailList.push(mail);
            })
        } 
    }
});