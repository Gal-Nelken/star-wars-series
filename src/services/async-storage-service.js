// LOCAL STORAGE SERVICE THAT RETURNS A PROMISE, ACT AS A SERVER. FOR FRONTEND PROJECTS ONLY


export const asyncStorageService = {
    post,
    put,
    remove,
    query,
    getEntities
}



// ----------------------- PRODUCTS CRUDL -----------------------
//  ----- LIST -----
async function query(entityType) {
    const entities = JSON.parse(localStorage.getItem(entityType))
    _save(entityType, entities);
    return Promise.resolve(entities)
}


//  ----- CREATE ---
async function post(entityType, newEntity) {
    newEntity._id = _makeId();
    const entities = await query(entityType)
    entities.push(newEntity);
    _save(entityType, entities);
    return Promise.resolve(newEntity);
}

// ----- GET ENTITIES -----
async function getEntities() {
    try {
        const res = await fetch("https://www.swapi.tech/api/films/");
        const data = await res.json();
        return data.result;
    } catch (err) {
        console.error(err)
    }
}

//  ----- UPDATE -----
async function put(entityType, updatedEntity) {
    const entities = await query(entityType) || [];
    entities.push(updatedEntity)
    _save(entityType, entities);
    return Promise.resolve(entities);
}

//  ----- DELETE -----
async function remove(entityType, entityId) {
    const entities = await query(entityType)
    if (!entities) return
    const updatedEntitys = entities.filter(entity => entity._id !== entityId)
    _save(entityType, updatedEntitys);
    return Promise.resolve(updatedEntitys);
}



// ------------ INNER FUNCTIONS  ------------ 

// ----- SAVE TO STORAGE -----
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}

// ----- CREAT NEW ID -----
function _makeId(length = 7) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


