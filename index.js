const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().format();

const date = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, date, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

simplegit().add([FILE_PATH]).commit(DATE,{'--date':DATE})