import { MongoClient } from "mongodb";


export class MongoServices {

    ObjectId = require('mongodb').ObjectID;
    uri = "mongodb+srv://Pazu:ufn0ddI1m5f04KWW@pazucluster.klrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(this.uri, { /*useNewUrlParser: true, useUnifiedTopology: true */});
    clusterName = 'PazuSarl';

    collectionName = 'DibiDictonary';
    collectionGrammarName = 'GrammarRules';
    collectionMinecraftName = 'Minecraft';
    collectionLogsName = 'logsDirtyPazu';

}