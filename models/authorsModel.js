const { request } = require('../db/request');

module.exports.allAuthors = async () => {
    const data = await request(`SELECT * FROM authors`);
    return data;
}


module.exports.authorById = async (id) => {
    //console.log(`MODELO ${id}`)
    const data = await request(`SELECT * FROM authors WHERE id = ${id}`);
    return data.length > 0 ? data[0] : { message: `No existe autor con id ${id}`, data };
}


module.exports.createAuthor = async (name, lastName, alive) => {
    //Recibo del controlador los datos
    const data = await request(`
    INSERT INTO authors(name, lastName, alive)
    VALUES('${name}', '${lastName}', ${alive})
    `);
    const newData = await request(`SELECT * FROM authors`);
    return {
        created: data.insertId ? { message: 'Autor creado', created: true, newData } : { created: false, message: 'Hubo un error al momento de crear el autor' },
    }
};

module.exports.updateAuthor = async (id, name, lastName, alive) => {
    //Recibo del controlador los datos
    const data = await request(`
        UPDATE authors SET
            name = '${name}',
            lastName = '${lastName}',
            alive = ${alive}    
        WHERE id = ${id}
        `);
    const newData = await request(`SELECT * FROM authors`);

    return {
        updated: data.affectedRows ? { message: 'Autor actualizado', updated: true, newData } : { message: `No existe autor con id ${id}`, updated: false, newData },
    }
};



module.exports.deleteAuthor = async (id) => {
    console.log(`MODELO ${id}`)
    const data = await request(`
        DELETE FROM authors WHERE id = ${id}    
    `)
    const newData = await request(`SELECT * FROM authors`);
    return data.affectedRows ?
        { message: 'Autor Eliminado', deleted: true, newData }
        :
        { message: `No existe autor con id ${id}`, deleted: false, newData }

}








