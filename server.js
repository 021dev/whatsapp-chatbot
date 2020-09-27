//NPM Requires
const venom = require('venom-bot');
const TimeControl = require('./app/Controller/TimeControl');

//Local Requires
require ('./app/Controller/TimeControl');

venom.create().then((client) => start(client));

function start(client) {

    client.onMessage(async (message) => {

        await client.sendText('5521966356493@c.us', '👋 Hello from venom!')
        .then();

        await client.getBatteryLevel().then((result)=>{console.log(result)})

        if (message.isGroupMsg === false){

            switch (message.body) {

                case 'Olá':
                    client.sendText(message.from, 'Você me mandou Olá');
                    break;

                case 'Rafael':
                    client.sendText(message.from, 'Você me mandou Rafael')
                    .then((result) => {console.log('Result:::', result)})
                    break;
                
                case 'Hora':
                    client.sendText(message.from, TimeControl.FullTimeNow());
                    break;
            
                default:
                    break;
            }
        }

        /*if (message.body === 'Hi' && message.isGroupMsg === false) {
            
            client.sendText(message.from, 'Olá! Tudo bem com voceeeê?')
            .then((result) => {console.log('Result: ', result); //retorna um objeto de successo
            })
            .catch((erro) => {console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
            });
        
        }*/

    });


}