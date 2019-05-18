url = "mongodb://127.0.0.1:27017/"
dbname = "quickApi"
const { MongoClient } = require('mongodb');

exports.insertOne = async (collection, data) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        let date = new Date();
        data['timestamp'] = date;
        dbo.collection(collection).insertOne(data, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}

exports.fetchOne = async (collection, query, projection) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).findOne(query, projection, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}

exports.fetch = async (collection, query, projection) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).find(query, projection).toArray((err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}

exports.updateOne = async (collection, query, newValues) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).updateOne(query, newValues, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}

exports.updateMany = async (collection, query, newValues) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).updateMany(query, newValues, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}


exports.deleteOne = async (collection, query) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).deleteOne(query, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}

exports.deleteMany = async (collection, query) => {
    const db = await new Promise(resolve => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err)
                throw err;
            return resolve(db);
        });
    });
    const dbo = db.db(dbname);
    const res = await new Promise(resolve => {
        dbo.collection(collection).deleteMany(query, (err, res) => {
            if (err)
                throw err;
            db.close();
            return resolve(res);
        });
    });
    return res;
}
