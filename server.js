const e = require('cors');
var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});
const port = process.env.PORT || 5000;
 
app.set(port, process.env.PORT);
app.use(express.static('./client/'));

// Liste des Tokens
var tokens = [];
 
// MongoDB
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://Pazu:ufn0ddI1m5f04KWW@pazucluster.klrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const clusterName = 'PazuSarl';

const collectionName = 'DibiDictonary';
const collectionMinecraftName = 'Minecraft';
const collectionLogsName = 'logsDirtyPazu';

client.connect(async (err) => {
    if (err) throw err;
});

// Exemple
io.on('connection', socket => {

    // Dictionnaire

    socket.on('fetchDict', () => {
        console.log('Récupération du dico');
        client.db(clusterName).collection(collectionName).find().toArray((err, res) => {
            if (err) throw err;
            socket.emit('loadDict', {dict: res});
        });
    });

    socket.on('addWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            let word = data.newWord;
            if (!word.dibi || !word.french) {
                const mes = 'Impossible d\'ajouter le mot ' + word.dibi + ' car il faut au moins le mot en Dibi et sa tradution en Français'
                console.log(mes);
                socket.emit('responseAddWord', {status: 2, mes: mes });
            } else {
                log('Ajout d\'un mot : ' + word.dibi);
                try {
                    client.db(clusterName).collection(collectionName).insertOne(word);
                } catch (e) {
                    socket.emit('responseAddWord', {status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
                    throw e;
                }
                socket.emit('responseAddWord', {status: 0, mes: word.dibi + ' enregistré avec succès.' });
            }
        }
    });

    socket.on('editWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            let word = data.wordToEdit;
            if (!word.dibi || !word.french) {
                const mes = 'Impossible de modifier le mot ' + word.dibi + ' car il faut au moins le mot en Dibi et sa tradution en Français'
                console.log(mes);
                socket.emit('responseEditWord', {status: 2, mes: mes });
            } else {
                try {
                    client.db(clusterName).collection(collectionName).updateOne({_id: ObjectId(word._id)}, {$set: {dibi: word.dibi, french: word.french, english: word.english, partOfSpeech: word.partOfSpeech, author: word.author, date: word.date, description: word.description}}, (err, res) => {console.log(res);}, false);
                } catch (e) {
                    socket.emit('responseEditWord', {status: 1, mes: 'Erreur dans la modification du mot : ' + e.message });
                    throw e;
                }
                log(`Mot édité : ${word.dibi} => ${data.oldWord.dibi}, ${word.french} => ${data.oldWord.french}, ${word.english} => ${data.oldWord.english}, ${word.description} => ${data.oldWord.description}, ${word.author} => ${data.oldWord.author}`);
                socket.emit('responseEditWord', {status: 0, mes: word.dibi + ' modifié avec succès.' });
            }
        }
    });

    socket.on('deleteWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            let word = data.word;
            log('Suppression d\'un mot : ' + word.dibi);
            try {
                client.db(clusterName).collection(collectionName).deleteOne({_id: ObjectId(word._id)});
            } catch (e) {
                throw e;
            }
        }
    });

    // Minecraft

    socket.on('fetchMinecraft', () => {
        console.log('Récupération des mots de Minecraft');
        client.db(clusterName).collection(collectionMinecraftName).find().toArray((err, res) => {
            if (err) throw err;
            socket.emit('loadMinecraftWordList', {dict: res});
        });
    });

    socket.on('fetchMinecraftForDl', () => {
        console.log('Récupération des mots de Minecraft');
        client.db(clusterName).collection(collectionMinecraftName).find().toArray((err, res) => {
            if (err) throw err;
            socket.emit('loadMinecraftWordListForDl', {dict: res});
        });
    });

    socket.on('editMcWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            try {
                client.db(clusterName).collection(collectionMinecraftName).updateOne({_id: ObjectId(data._id)}, {$set: {dibi: data.newWord, done: data.done}}, (err, res) => {console.log(res);}, false);
            } catch (e) {
                throw e;
            }
            log(`Mot minecraft édité : ${data.english} = ${data.newWord}`);
        }
    });

    socket.on('editDoneMcWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            try {
                client.db(clusterName).collection(collectionMinecraftName).updateOne({_id: ObjectId(data._id)}, {$set: {done: data.done}}, (err, res) => {console.log(res);}, false);
            } catch (e) {
                throw e;
            }
            log(`Mot minecraft mis à : ${data.done}`);
        }
    });

    // Logs

    socket.on('fetchLogs', () => {
        client.db(clusterName).collection(collectionLogsName).find().toArray((err, res) => {
            if (err) throw err;
            socket.emit('responseLogs', {logs: res});
        });
    });

    // Tokens

    socket.on('login', data => {
        if (data.pwd === 'RGliaUppa3NhaWZvMjE=') {
            log('Connexion admin réussie');
            let token = Math.floor(Math.random() * 100000);
            tokens.push(token);
            socket.emit('trust', { token });
        }
    });

    socket.on('logout', data => {
        // Remove le token
    });

});

function log(message) {
    let log = { message, timestamp: new Date() };
    console.log(message);
    try {
        client.db(clusterName).collection(collectionLogsName).insertOne(log);
    } catch (e) {
        socket.emit('responseAddWord', {status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
        throw e;
    }
}
 
http.listen(port, () => {
    console.log('App listening on port ' + port);
});
