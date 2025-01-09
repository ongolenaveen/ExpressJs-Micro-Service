const proxy = require('proxy-agent');
const config = require('../config');
const fsPromises = require('node:fs/promises');
const path = require('node:path');
const fs = require('node:fs');

/**
 * @desc Retrieves client details based on id.
 * @param key - client id
 * @return client object - Json Response
 */

exports.getClient =  async function getClient(key){
    try {
        let filename =`./clients/${key}.json`;
        const data = await fsPromises.readFile(filename, { encoding: 'utf8' });
        let client = JSON.parse(data);
        return client;
    } catch (err) {
        console.log(err);
        return {};
    }
}

/**
 * @desc Retrieves all clients.
 * @return client objects collection - Json Response
 */

exports.getClients =  async function getClients(){
  try {
      let folderPath =`./clients`;
      let clients = [];
      const isFile = fileName => {
        return fs.lstatSync(fileName).isFile();
      };

      let files = await fsPromises.readdir(folderPath);
      
      let filteredFiles = files.map(fileName=> path.join(folderPath, fileName))
      .filter(isFile);
     
      for(let fileName of filteredFiles)
      {
        const data = await fsPromises.readFile(fileName, { encoding: 'utf8' });
        let client = JSON.parse(data);
        clients.push(client);
      }
      return clients;
    
  } catch (err) {
      console.log(err);
      return [];
  }
}