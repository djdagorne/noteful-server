const knex = require('knex');
const app = require('../src/app');
const { makeFoldersArray, makeMaliciousFolders } = require('./folders.fixture');
const path = require('path');

describe('Folders Endpoints',function() {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })

    after('disconnect from database', ()=> db.destroy())

    before('clean the table',()=> db.raw('TRUNCATE noteful_folders, noteful_notes RESTART IDENTITY CASCADE'))

    afterEach('cleanup',()=> db.raw('TRUNCATE noteful_folders, noteful_notes RESTART IDENTITY CASCADE'))
})