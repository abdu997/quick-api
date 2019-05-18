const { deleteMany, deleteOne, fetchOne, insertOne, updateMany, updateOne } = require('../db')
const { ObjectId } = require('mongodb')

exports.createForm = async (req, res) => {
    return new Promise(resolve => {
        return resolve(insertOne("forms", req.body))
    }).then(result => {
        let formHash = result.ops[0]._id
        res.send({formId: formHash})
    }).catch(err => res.send(err))
}

exports.getForm = async (req, res) => {
    return new Promise(resolve => {
        let query = {_id: ObjectId(req.params.formId)}
        return resolve(fetchOne("forms", query))
    }).then(result => {
        res.send(result)
    }).catch(err => res.send(err))
}

exports.updateForm = async (req, res) => {
    return new Promise(resolve => {
        let query = {_id: ObjectId(req.params.formId)}
        let body = req.body
        delete body._id
        let newValues = {$set: body}
        return resolve(updateOne("forms", query, newValues))
    }).then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}

exports.deleteForm = async (req, res) => {
    return new Promise(resolve => {
        let query = {_id: ObjectId(req.params.formId)}
        deleteMany("submissions", {formId: req.params.formId})
        return resolve(deleteOne("forms", query))
    }).then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}
