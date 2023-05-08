const fs  = require('fs')
const { log, success, error } = require('./chalk')

function writeNiderijiJson(data) {
  fs.mkdirSync('./logs', { recursive: true }, (err) => {
    if (err) throw err;
  })
  fs.writeFile('./logs/nideriji.json', JSON.stringify(data), (err) => {
    if (err) throw err
    log(success('Export your diary successfully!'))
  })
}

function writeNiderijiTxt(data) {
  fs.mkdirSync('./logs', { recursive: true }, (err) => {
    if (err) throw err;
  })
  data.forEach(item => {
    const date = item.createddate;
    const title =  date + ' ' + item.title.replace(/\//g, '.');
    const path = './logs/' + `${title}.txt`;
    const content = `${item.title} 心情:${item.mood} 天气:${item.weather}\n${date} ${item.weekday}\n\n${item.content}`
    fs.writeFile(path, content, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
  })
}

function writeOnediaryJson(data) {
  fs.mkdirSync('./logs/1diary', { recursive: true }, (err) => {
    if (err) throw err;
  })
  fs.writeFile('./logs/1diary/source.json', JSON.stringify(data), (err) => {
    if (err) throw err
    log(success('Convert into 1diary successfully!'))
  })
}

module.exports = {
  writeNiderijiJson,
  writeNiderijiTxt,
  writeOnediaryJson
}