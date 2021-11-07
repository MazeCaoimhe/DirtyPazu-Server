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

client.connect(async (err) => {
    if (err) throw err;
});

// Exemple
io.on('connection', socket => {

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
                console.log('Ajout d\'un mot : ' + word.dibi);
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
                console.log(JSON.stringify(word, null, 3));
                try {
                    client.db(clusterName).collection(collectionName).updateOne({_id: ObjectId(word._id)}, {$set: {dibi: word.dibi, french: word.french, english: word.english, partOfSpeech: word.partOfSpeech, author: word.author, date: word.date, description: word.description}}, (err, res) => {console.log(res);}, false);
                } catch (e) {
                    socket.emit('responseEditWord', {status: 1, mes: 'Erreur dans la modification du mot : ' + e.message });
                    throw e;
                }
                socket.emit('responseEditWord', {status: 0, mes: word.dibi + ' modifié avec succès.' });
            }
        }
    });

    socket.on('deleteWord', data => {
        if (!tokens.includes(data.token)) {
            socket.emit('wrongToken');
        } else {
            let word = data.word;
            console.log('Suppression d\'un mot : ' + word.dibi);
            try {
                client.db(clusterName).collection(collectionName).deleteOne({_id: ObjectId(word._id)});
            } catch (e) {
                throw e;
            }
        }
    });

    socket.on('login', data => {
        if (data.pwd === 'RGliaUNvbkxhbmcyMQ==') {
            console.log('Connexion admin réussie');
            let token = Math.floor(Math.random() * 100000);
            tokens.push(token);
            socket.emit('trust', { token });
        }
    });

    socket.on('logout', data => {
        // Remove le token
    });

});
 
http.listen(port, () => {
    console.log('App listening on port ' + port);
});
