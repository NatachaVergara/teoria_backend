const { request } = require('../db/request');

module.exports.allAuthors = async () => {
    const data = await request(`SELECT * FROM authors`);
    return data;
}


module.exports.authorById = async (id) => {
    //console.log(`MODELO ${id}`)
    const data = await request(`SELECT * FROM authors WHERE id = ${id}`);
    return data.length > 0 ? data[0] : 'No existe ese libro';
}

module.exports.createAuthor = async (name, lastName, alive) => {
    const data = await request(`
    INSERT INTO authors(name, lastName, alive)
    VALUES('${name}', '${lastName}', ${alive})
    `);

    return {
        created: data.insertId ? true : false,
        id: data.insertId ? data.insertId : null
    }
}


module.exports.updateAuthor = async (id, name, lastName, alive) => {
    const data = await request(`
        UPDATE authors SET
            name = '${name}',
            lastName = '${lastName}',
            alive = ${alive}    
        WHERE id = ${id}
        `);

    return {
        updated: data.affectedRows ? true : false,
        data
    }
}

module.exports.deleteAuthor = async (id) => {
    const data = await request(`
        DELETE FROM authors WHERE id = ${id}    
    `)

    return {
        deleted: data.affectedRows ? true : false,
        data
    }
}