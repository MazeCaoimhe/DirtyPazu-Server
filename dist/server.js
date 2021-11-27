"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const adminPassword = 'RGliaUppa3NhaWZvMjE='; // Mot de passe administrateur
// MongoDB
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://Pazu:ufn0ddI1m5f04KWW@pazucluster.klrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const clusterName = 'PazuSarl';
const collectionName = 'DibiDictonary';
const collectionGrammarName = 'GrammarRules';
const collectionMinecraftName = 'Minecraft';
const collectionLogsName = 'logsDirtyPazu';
client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
    if (err)
        throw err;
}));
io.on('connection', (socket) => {
    // Dictionnaire
    socket.on('fetchDict', () => {
        console.log('Récupération du dico');
        client.db(clusterName).collection(collectionName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('loadDict', { dict: res });
        });
    });
    socket.on('addWord', (data) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        }
        else {
            let word = data.newWord;
            if (!word.dibi || !word.french || !word.author) {
                const mes = 'Impossible d\'ajouter le mot ' + word.dibi + ' car il faut au moins le mot en Dibi, sa tradution en Français et son créateur.';
                console.log(mes);
                socket.emit('responseAddWord', { status: 2, mes: mes });
            }
            else {
                log('Ajout d\'un mot : ' + word.dibi, socket);
                try {
                    client.db(clusterName).collection(collectionName).insertOne(word);
                }
                catch (e) {
                    socket.emit('responseAddWord', { status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
                    throw e;
                }
                socket.emit('responseAddWord', { status: 0, mes: word.dibi + ' enregistré avec succès.' });
            }
        }
    });
    socket.on('editWord', (data) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        }
        else {
            let word = data.wordToEdit;
            if (!word.dibi || !word.french) {
                const mes = 'Impossible de modifier le mot ' + word.dibi + ' car il faut au moins le mot en Dibi et sa tradution en Français';
                console.log(mes);
                socket.emit('responseEditWord', { status: 2, mes: mes });
            }
            else {
                try {
                    client.db(clusterName).collection(collectionName).updateOne({ _id: ObjectId(word._id) }, { $set: { dibi: word.dibi, french: word.french, english: word.english, partOfSpeech: word.partOfSpeech, author: word.author, date: word.date, description: word.description } }, (err, res) => { console.log(res); }, false);
                }
                catch (e) {
                    socket.emit('responseEditWord', { status: 1, mes: 'Erreur dans la modification du mot : ' + e.message });
                    throw e;
                }
                let modifs = [];
                word.dibi === data.oldWord.dibi ? {} : modifs.push(data.oldWord.dibi + ' => ' + word.dibi);
                word.french === data.oldWord.french ? {} : modifs.push(data.oldWord.french + ' => ' + word.french);
                word.english === data.oldWord.english ? {} : modifs.push(data.oldWord.english + ' => ' + word.english);
                word.description === data.oldWord.description ? {} : modifs.push(data.oldWord.description + ' => ' + word.description);
                word.author === data.oldWord.author ? {} : modifs.push(data.oldWord.author + ' => ' + word.author);
                log(`Mot édité : ${modifs.join(', ')}`, socket);
                socket.emit('responseEditWord', { status: 0, mes: word.dibi + ' modifié avec succès.' });
            }
        }
    });
    socket.on('deleteWord', (data) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        }
        else {
            let word = data.word;
            log('Suppression d\'un mot : ' + word.dibi, socket);
            try {
                client.db(clusterName).collection(collectionName).deleteOne({ _id: ObjectId(word._id) });
                socket.emit('wordDeleted', {});
            }
            catch (e) {
                throw e;
            }
        }
    });
    // Grammaire
    /*
        socket.on('fetchGrammarRules', () => {
            console.log('Récupération des règles de grammaire');
            client.db(clusterName).collection(collectionGrammarName).find().toArray((err, res) => {
                if (err) throw err;
                socket.emit('loadRules', {rules: res});
            });
        });
    
        socket.on('addRule', (data: any) => {
            if (checkPwd(data.pwd)) {
                socket.emit('wrongPwd');
            } else {
                let rule = data.rule; // A Coder
                if (!word.dibi || !word.french) {
                    const mes = 'Impossible d\'ajouter la règle ' + word.dibi + ' car il faut au moins le mot en Dibi et sa tradution en Français'
                    console.log(mes);
                    socket.emit('responseAddWord', {status: 2, mes: mes });
                } else {
                    log('Ajout d\'un mot : ' + word.dibi);
                    try {
                        client.db(clusterName).collection(collectionGrammarName).insertOne(word);
                    } catch (e) {
                        socket.emit('responseAddWord', {status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
                        throw e;
                    }
                    socket.emit('responseAddWord', {status: 0, mes: word.dibi + ' enregistré avec succès.' });
                }
            }
        });
    
        socket.on('editRule', data => {
            if (checkPwd(data.pwd)) {
                socket.emit('wrongPwd');
            } else {
                let rule = data.rule; // A Coder
                try {
                    client.db(clusterName).collection(collectionGrammarName).updateOne({_id: ObjectId(word._id)}, {$set: {dibi: word.dibi, french: word.french, english: word.english, partOfSpeech: word.partOfSpeech, author: word.author, date: word.date, description: word.description}}, (err, res) => {console.log(res);}, false);
                } catch (e) {
                    socket.emit('responseEditWord', {status: 1, mes: 'Erreur dans la modification du mot : ' + e.message });
                    throw e;
                }
                let modifs = [];
                word.dibi === data.oldWord.dibi ? {} : modifs.push(data.oldWord.dibi + ' => ' + word.dibi);
                word.french === data.oldWord.french ? {} : modifs.push(data.oldWord.french + ' => ' + word.french);
                word.english === data.oldWord.english ? {} : modifs.push(data.oldWord.english + ' => ' + word.english);
                word.description === data.oldWord.description ? {} : modifs.push(data.oldWord.description + ' => ' + word.description);
                word.author === data.oldWord.author ? {} : modifs.push(data.oldWord.author + ' => ' + word.author);
                log(`Mot édité : ${modifs.join(', ')}`);
                socket.emit('responseEditWord', {status: 0, mes: word.dibi + ' modifié avec succès.' });
            }
        });
    
        socket.on('deleteWord', data => {
            if (checkPwd(data.pwd)) {
                socket.emit('wrongPwd');
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
    */
    // Minecraft
    socket.on('fetchMinecraft', () => {
        console.log('Récupération des mots de Minecraft');
        client.db(clusterName).collection(collectionMinecraftName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('loadMinecraftWordList', { dict: res });
        });
    });
    socket.on('fetchMinecraftForDl', () => {
        console.log('Récupération des mots de Minecraft');
        client.db(clusterName).collection(collectionMinecraftName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('loadMinecraftWordListForDl', { dict: res });
        });
    });
    socket.on('editMcWord', (data) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        }
        else {
            try {
                client.db(clusterName).collection(collectionMinecraftName).updateOne({ _id: ObjectId(data._id) }, { $set: { dibi: data.newWord, done: data.done } }, (err, res) => { console.log(res); }, false);
            }
            catch (e) {
                throw e;
            }
            log(`Mot minecraft édité : ${data.english} = ${data.newWord}`, socket);
        }
    });
    socket.on('editDoneMcWord', (data) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        }
        else {
            try {
                client.db(clusterName).collection(collectionMinecraftName).updateOne({ _id: ObjectId(data._id) }, { $set: { done: data.done } }, (err, res) => { console.log(res); }, false);
            }
            catch (e) {
                throw e;
            }
            log(`Mot minecraft mis à : ${data.done}`, socket);
        }
    });
    // Logs
    socket.on('fetchLogs', () => {
        client.db(clusterName).collection(collectionLogsName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('responseLogs', { logs: res });
        });
    });
    // Gestion des connections admin
    socket.on('login', (data) => {
        if (checkPwd(data.pwd)) {
            console.log('Connexion admin réussie');
            socket.emit('trust', { pwd: data.pwd });
        }
    });
    socket.on('logout', (data) => {
    });
});
///////////////
// FONCTIONS //
///////////////
function checkPwd(pwd) {
    return pwd === adminPassword;
}
function log(message, socket) {
    let log = { message, timestamp: new Date() };
    console.log(message);
    try {
        client.db(clusterName).collection(collectionLogsName).insertOne(log);
    }
    catch (e) {
        socket.emit('responseAddWord', { status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
        throw e;
    }
}
/////////
// API //
/////////
/**
 * Fourni la liste de tous les mots du dictionnaire
 */
app.get('/dictionnary/getWords/all', function (req, res) {
    client.db(clusterName).collection(collectionName).find().toArray((err, res2) => {
        if (err)
            throw err;
        res.send(JSON.stringify(res2, null, 3));
    });
});
/**
 * A refaire !
 */
app.get('/dictionnary/getWords/query', function (req, res) {
    let query = {};
    req.query._id ? query._id = ObjectId(req.query._id) : {};
    req.query.dibi ? query.dibi = req.query.dibi : {};
    req.query.french ? query.french = req.query.french : {};
    req.query.english ? query.english = req.query.english : {};
    req.query.partOfSpeech ? query.partOfSpeech = req.query.partOfSpeech : {};
    req.query.author ? query.author = req.query.author : {};
    req.query.date ? query.date = req.query.date : {};
    req.query.description ? query.description = req.query.description : {};
    console.log(query);
    client.db(clusterName).collection(collectionName).find(query).toArray((err, res2) => {
        if (err)
            throw err;
        res.send(JSON.stringify(res2, null, 3));
    });
});
http.listen(port, () => {
    console.log('App listening on port ' + port);
});
