import db from './dbConnection.js'

export async function getMoods() {
    let sqlQuery = 'SELECT * FROM moods';
    const moods = await db.query(sqlQuery);
    return moods[0];
}

export async function addMood(mood) {
    let sqlQuery = 'INSERT INTO moods (mood_text, rating) VALUES (:mood_text, :rating)'
    const params = {
        mood_text: mood.mood_text,
        rating: mood.rating,
    }
    await db.query(sqlQuery, params)
    const moods = await getMoods()
    return moods
}

export async function deleteMood(id) {
    let sqlQuery = 'DELETE FROM moods WHERE id = :id'
    const params = {
        id: id,
    }
    await db.query(sqlQuery, params)
    const moods = await getMoods()
    return moods
}

export async function updateMood(mood) {
    let sqlQuery = 'UPDATE moods SET mood_text = :mood_text, rating = :rating, date = CURRENT_TIMESTAMP() WHERE id = :id'
    const params = {
        id: mood.id,
        mood_text: mood.mood_text,
        rating: mood.rating
    }
    await db.query(sqlQuery, params)
    const moods = await getMoods()
    return moods
}