
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
const collectionSuggestion = 'Suggestion'
const collectionProfilesName = 'Profiles'
const collectionLogsName = 'logsDirtyPazu';

client.connect(async (err: any) => {
    if (err) throw err;
});

io.on('connection', (socket: any) => {

    // Dictionnaire

    /**
     * Récupère tous les mots du dictionnaire
     */
    socket.on('fetchDict', () => {
        console.log('Récupération du dico');
        client.db(clusterName).collection(collectionName).find().toArray((err: any, res: any) => {
            if (err) throw err;
            socket.emit('loadDict', { dict: res });
        });
    });

    /**
     * Ajoute un mot au dictionnaire
     */
    socket.on('addWord', (data: any) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        } else {
            let word = data.newWord;
            if (!word.dibi || !word.french || !word.author) {
                const mes = 'Impossible d\'ajouter le mot ' + word.dibi + ' car il faut au moins le mot en Dibi, sa tradution en Français et son créateur.'
                console.log(mes);
                socket.emit('responseAddWord', { status: 2, mes: mes });
            } else {
                log('Ajout d\'un mot : ' + word.dibi, socket);
                try {
                    client.db(clusterName).collection(collectionName).insertOne(word);
                } catch (e: any) {
                    socket.emit('responseAddWord', { status: 1, mes: 'Erreur dans l\'enregistrement du mot : ' + e.message });
                    throw e;
                }
                socket.emit('responseAddWord', { status: 0, mes: 'Proposition enregistrée avec succès' });
            }
        }
    });

    /**
     * Modifie un mot du dictionnaire
     */
    socket.on('editWord', (data: any) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        } else {
            let word = data.wordToEdit;
            if (!word.dibi || !word.french) {
                const mes = 'Impossible de modifier le mot ' + word.dibi + ' car il faut au moins le mot en Dibi et sa tradution en Français'
                console.log(mes);
                socket.emit('responseEditWord', { status: 2, mes: mes });
            } else {
                try {
                    client.db(clusterName).collection(collectionName).updateOne({ _id: ObjectId(word._id) }, { $set: { dibi: word.dibi, french: word.french, english: word.english, partOfSpeech: word.partOfSpeech, author: word.author, date: word.date, description: word.description } }, (err: any, res: any) => { console.log(res); }, false);
                } catch (e: any) {
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
    socket.on('deleteWord', (data: any) => {
        if (checkPwd(data.pwd)) {
            socket.emit('wrongPwd');
        } else {
            let word = data.word;
            log('Suppression d\'un mot : ' + word.dibi, socket);
            try {
                client.db(clusterName).collection(collectionName).deleteOne({ _id: ObjectId(word._id) });
                socket.emit('wordDeleted', {});
            } catch (e) {
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
        client.db(clusterName).collection(collectionSuggestion).find().toArray((err: any, res: any) => {
            if (err) throw err;
            socket.emit('loadSuggestions', res);
        });
    });

    socket.on('sendSuggestion', (dibiWordsSuggestion: {date: Date}) => {
        log('Suggestion', socket);
        dibiWordsSuggestion.date = new Date();
        try {
            client.db(clusterName).collection(collectionSuggestion).insertOne(dibiWordsSuggestion);
        } catch (e: any) {
            socket.emit('responseSuggestWord', { status: 1, mes: 'Erreur dans l\'ajout de la suggestion : ' + e.message });
            throw e;
        }
        socket.emit('responseSuggestWord', { status: 0, mes: 'Suggestion enregistrée avec succès.' });
    });

    // Gestion des connections Google et admin

    /**
     * Connexion admin
     */
    socket.on('login', (data: any) => {
        if (checkPwd(data.pwd)) {
            console.log('Connexion admin réussie');
            socket.emit('trust', { pwd: data.pwd });
        } else {
            socket.emit('wrongPwd');
        }
    });

    socket.on('logout', (data: any) => {

    });

    /**
     * Connexion Google
     * La connexion Google se fait à l'extérieur, cette méthode sert à récupérer les options du profils appelées AccountSettings
     */
    socket.on('loadProfile', (user: any) => {
        client.db(clusterName).collection(collectionProfilesName).find().toArray((err: any, res: any) => {
            if (err) throw err;
            let elem = res[res.findIndex((i: { email: string; }) => i.email === user.email)];
            if (elem) {
                socket.emit('responseProfile', { user, accountSettings: elem });
            } else {
                socket.emit('responseProfile', { user });
            }
        });
    });

    /**
     * Complète les informations d'un profil
     */
    socket.on('setProfile', (data: any) => {
        log(`Modification du profil ${data.user.email} : ${data.discordPseudo}#${data.discordTag}`, socket);
        // Suppression de la ligne
        try {
            client.db(clusterName).collection(collectionProfilesName).deleteOne({ email: data.user.email });
        } catch (e) {
            throw e;
        }
        // Réécriture de la ligne
        try {
            client.db(clusterName).collection(collectionProfilesName).insertOne(data);
        } catch (e: any) {
            throw e;
        }
    });

    /**
     * Récupère toutes les options des comptes utilisateur
     */
    socket.on('fetchProfiles', () => {
        console.log('Récupération des comptes utilisateur');
        client.db(clusterName).collection(collectionProfilesName).find().toArray((err: any, res: any) => {
            if (err) throw err;
            socket.emit('loadProfiles', res);
        });
    });

    // Logs

    /**
     * Récupère tous les logs
     */
    socket.on('fetchLogs', () => {
        client.db(clusterName).collection(collectionLogsName).find().toArray((err: any, res: any) => {
            if (err) throw err;
            socket.emit('responseLogs', { logs: res });
        });
    });

});

///////////////
// FONCTIONS //
///////////////

function checkPwd(pwd: string) {
    return pwd === adminPassword;
}

function log(message: string, socket: any) {
    let log = { message, timestamp: new Date() };
    console.log(message);
    try {
        client.db(clusterName).collection(collectionLogsName).insertOne(log);
    } catch (e: any) {
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
app.get('/dictionnary/getWords/all', function (req: any, res: any) {
    client.db(clusterName).collection(collectionName).find().toArray((err: any, res2: any) => {
        if (err) throw err;
        res.send(JSON.stringify(res2, null, 3));
    });
});

/**
 * A refaire !
 */
app.get('/dictionnary/getWords/query', function (req: any, res: any) {
    let query: any = {};
    req.query._id ? query._id = ObjectId(req.query._id) : {};
    req.query.dibi ? query.dibi = req.query.dibi : {};
    req.query.french ? query.french = req.query.french : {};
    req.query.english ? query.english = req.query.english : {};
    req.query.partOfSpeech ? query.partOfSpeech = req.query.partOfSpeech : {};
    req.query.author ? query.author = req.query.author : {};
    req.query.date ? query.date = req.query.date : {};
    req.query.description ? query.description = req.query.description : {};
    console.log(query);
    client.db(clusterName).collection(collectionName).find(query).toArray((err: any, res2: any) => {
        if (err) throw err;
        res.send(JSON.stringify(res2, null, 3));
    });
});

http.listen(port, () => {
    console.log('App listening on port ' + port);
});