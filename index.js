const axios = require('axios')

async function run(){
    for (let i = 1; i<2; ++i)
    {
        const uploadServer = await axios.get('https://api.vk.com/method/wall.get', {
            params: {
                domain: 'jumoreski',
                offset: 100,
                count: 10,
                access_token: 'c4b2c5373bcde61383fc6b8b46868d12c6d9a9741c0107b450e4691faa9a82c3f22d3b50e70210ac616ef',
                v: '5.131',
                extended: false
            },
        });
        console.log(uploadServer.data.response.items);
    }
}

run()