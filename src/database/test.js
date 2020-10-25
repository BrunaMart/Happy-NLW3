const Database = require('./db');
const saveHost = require('./saveHost');

Database.then(async db => {
    // inserir dados na tabela 
    await saveHost(db, {
        lat: "-22.4778821",
        lng: "-44.1496131",
        name: "Lar dos Meninos",
        about: "Acolhe crianças e adolescentes de 0 a 18 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "24999853124",
        images: [
            "https://www.focoregional.com.br/Foto/fundacao-beatriz-gama-celebra-a-pascoa.jpg?w=690&h=420&pasta=noticia",
            "https://diariodovale.com.br/wp-content/uploads/2017/02/03-02-17-Recrea%C3%A7%C3%A3o-Crian%C3%A7as-Monte-Castelo-Yuri-Melo-2.jpg",
            "https://focoregional.com.br/Foto/fundacao-beatriz-gama-promove-mostra-de-danca.JPG?w=690&h=420&pasta=noticia",
            "https://focoregional.com.br/Foto/fundacao-beatriz-gama-promove-baile-de-pre-ca.JPG?w=690&h=420&pasta=noticia",
            "https://i.ytimg.com/vi/lEXPrW0xSys/maxresdefault.jpg",
            "https://destaquepopular.com.br/wp-content/uploads/2018/07/12.07.18.Festa-Junina-FBG-63-e1531441006704-600x315-cropped.jpg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de Visitas Das 7h30 às 17h30",
        open_on_weekends: "0"
    })

    // consultar dados da tabela 
    const selectedHost = await db.all("SELECT * FROM host")
    console.log(selectedHost) 

    // consultar somente 1 lar pelo id de
    const host2 = await db.all('SELECT * FROM host WHERE id = "2"')
    console.log(host2)

    // deletar dado da tabela
    //console.log(await db.run('DELETE FROM host WHERE id = "6"'))
})