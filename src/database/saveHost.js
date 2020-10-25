function saveHost(db, host2) {
  return db.run(`
    INSERT INTO host (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${host2.lat}",
        "${host2.lng}",
        "${host2.name}",
        "${host2.about}",
        "${host2.whatsapp}",
        "${host2.images}",
        "${host2.instructions}",
        "${host2.opening_hours}",
        "${host2.open_on_weekends}"
    );
`);
}

module.exports = saveHost;
