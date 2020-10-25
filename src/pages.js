const Database = require('./database/db');
const saveHost2 = require('./database/saveHost');

module.exports = {

    index(req, res){
        return res.render('index')
    },

    async host(req, res){
        try {
            const db = await Database;
            const host = await db.all("SELECT * FROM host")
            return res.render('host', {host})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }        
    },

    async host2(req, res){
        
        const id = req.query.id 

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM host WHERE id = "${id}"`)
            const host2 = results[0]

            host2.images = host2.images.split(",")
            host2.firstImage = host2.images[0]

            if(host2.open_on_weekends == "0") {
                host2.open_on_weekends = false
            } else {
                host2.open_on_weekends = true
            }

            return res.render('host2', {host2})            
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!')    
        }
    },

    createHost(req, res){
        return res.render('create-host')
    },

    async saveHost2(req, res){
        const fields = req.body

        //validar se todos os campos estão preenchidos
        // if(Object.values(fields).includes('')){
        //     return res.send('Todos os campos devem ser preenchidos!')
        // }

        try {
            //salvar um orfanato
            const db = await Database
            await saveHost2(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            //redirecioonamento
            return res.redirect('/host')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }

    }
}