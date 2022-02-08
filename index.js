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
                access_token: 'c4b2c5373bcde61383fc6b8b46868d12c6d9a9741c0107b450e4691faa9a82c3f22d3b50e70210ac616ef',
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