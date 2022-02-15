const axios = require('axios')
const args = require('yargs').argv;

async function run(){
    if (process.argv.length < 3){
        console.log("Usage node ./index.js --substr <substring > <amount of anekdots>")
        process.exit()
    }
    let ss = args.substr
    if (!ss) ss="";
    for (let i = 0; i<1000; ++i)
    {
        let aneki = {}

        console.log(i)
        let uploadServer = await axios.get('https://api.vk.com/method/wall.get', {
            params: {
                domain: 'jumoreski',
                offset: 100*i,
                count: process.argv[2],
                access_token: '', //insert your own go api
                v: '5.131',
                extended: false
            },
        });
        aneki = JSON.parse(JSON.stringify(uploadServer.data.response.items))
        for (j = 0; j < aneki.length; j++)
        {
            if (aneki[j].text.toLowerCase().indexOf(ss) >= 0 ){ // find substing in anecdote
            console.log(j+" "+aneki[j].text+"\n");
            }
        }
    }

}


run()
