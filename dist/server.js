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
const adminPassword = 'UGlya2lBdXJpYWwyMQ=='; // Mot de passe administrateur
// MongoDB
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://Pazu:ufn0ddI1m5f04KWW@pazucluster.klrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const clusterName = 'PazuSarl';
const collectionName = 'DibiDictonary';
const collectionSuggestion = 'Suggestion';
const collectionProfilesName = 'Profiles'; // Au pluriel car qu'une ligne
const collectionGrammarName = 'GrammarRules'; // Déprécié
const collectionMinecraftName = 'Minecraft'; // Déprécié
const collectionUsersName = 'User'; // Déprécié
const collectionLogsName = 'logsDirtyPazu';
client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
    if (err)
        throw err;
}));
io.on('connection', (socket) => {
    // Dictionnaire
    /**
     * Récupère tous les mots du dictionnaire
     */
    socket.on('fetchDict', () => {
        console.log('Récupération du dico');
        client.db(clusterName).collection(collectionName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('loadDict', { dict: res });
        });
    });
    /**
     * Ajoute un mot au dictionnaire
     */
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
    /**
     * Modifie un mot du dictionnaire
     */
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
    /**
     * Supprime un mot du dictionnaire
     */
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
    // Proposition de mots
    /**
     * Récupère toutes les suggestions
     */
    socket.on('fetchSuggestions', () => {
        console.log('Récupération des suggestions');
        client.db(clusterName).collection(collectionSuggestion).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('loadSuggestions', res);
        });
    });
    socket.on('suggestWord', (data) => {
        // Étant une nouvelle suggestion, l'objet DibiWordSuggestion est créé avec comme version la première
        let suggest = {
            version: 1,
            date: new Date(),
            author: data.author,
            word: data.word,
            multipleDibi: data.multipleDibi,
            dibiSuggestions: (data.multipleDibi && data.dibiSuggestions ? data.dibiSuggestions : undefined),
            upVotes: [],
            downVotes: [],
            comments: [],
            state: 'suggested'
        };
        log('Suggestion d\'un mot ' + (data.multipleDibi ? 'avec plusieurs choix à voter' : ': ' + data.word.dibi), socket);
        try {
            client.db(clusterName).collection(collectionSuggestion).insertOne(suggest);
        }
        catch (e) {
            socket.emit('responseSuggestWord', { status: 1, mes: 'Erreur dans la suggestion du mot : ' + e.message });
            throw e;
        }
        socket.emit('responseSuggestWord', { status: 0, mes: data.word.dibi + ' enregistré avec succès.' });
    });
    // Gestion des connections Google et admin
    /**
     * Connexion admin
     */
    socket.on('login', (data) => {
        if (checkPwd(data.pwd)) {
            console.log('Connexion admin réussie');
            socket.emit('trust', { pwd: data.pwd });
        }
        else {
            socket.emit('wrongPwd');
        }
    });
    socket.on('logout', (data) => {
    });
    /**
     * Connexion Google
     * La connexion Google se fait à l'extérieur, cette méthode sert à récupérer les options du profils appelées AccountSettings
     */
    socket.on('loadProfile', (user) => {
        client.db(clusterName).collection(collectionProfilesName).find().toArray((err, res) => {
            if (err)
                throw err;
            let elem = res[res.findIndex((i) => i.email === user.email)];
            if (elem) {
                socket.emit('responseProfile', { user, accountSettings: elem });
            }
            else {
                socket.emit('responseProfile', { user });
            }
        });
    });
    /**
     * Complète les informations d'un profil
     */
    socket.on('setProfile', (data) => {
        log(`Modification du profil ${data.user.email} : ${data.discordPseudo}#${data.discordTag}`, socket);
        // Suppression de la ligne
        try {
            client.db(clusterName).collection(collectionProfilesName).deleteOne({ email: data.user.email });
        }
        catch (e) {
            throw e;
        }
        // Réécriture de la ligne
        try {
            client.db(clusterName).collection(collectionProfilesName).insertOne(data);
        }
        catch (e) {
            throw e;
        }
    });
    // Logs
    /**
     * Récupère tous les logs
     */
    socket.on('fetchLogs', () => {
        client.db(clusterName).collection(collectionLogsName).find().toArray((err, res) => {
            if (err)
                throw err;
            socket.emit('responseLogs', { logs: res });
        });
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
