"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoServices = void 0;
const mongodb_1 = require("mongodb");
class MongoServices {
    constructor() {
        this.ObjectId = require('mongodb').ObjectID;
        this.uri = "mongodb+srv://Pazu:ufn0ddI1m5f04KWW@pazucluster.klrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this.client = new mongodb_1.MongoClient(this.uri, { /*useNewUrlParser: true, useUnifiedTopology: true */});
        this.clusterName = 'PazuSarl';
        this.collectionName = 'DibiDictonary';
        this.collectionGrammarName = 'GrammarRules';
        this.collectionMinecraftName = 'Minecraft';
        this.collectionLogsName = 'logsDirtyPazu';
    }
}
exports.MongoServices = MongoServices;
