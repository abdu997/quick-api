const { insertOne, fetch, updateMany, deleteOne } = require('../db')
const { submissionValues } = require('../utils/schemas')
const { ObjectId } = require('mongodb')

exports.submit = async (req, res) => {
    return new Promise(resolve => {
        return resolve(insertOne("submissions", req.body))
    }).then(result => {
        let formHash = result.ops[0]._id
        res.send({formId: formHash})
    }).catch(err => console.log(err))
}

exports.getFormSubmissions = async (req, res) => {
    return new Promise(resolve => {
        let query = {formId: req.params.formId}
        let projection = { projection: {formId: 0} }
        return resolve(fetch("submissions", query, projection))
    }).then(result => {
        res.send(submissionValues(result))
    }).catch(err => console.log(err))
}

exports.updateSubmissions = async (req, res) => {
    return new Promise(resolve => {
        let query = {_id: ObjectId(req.params.submissionId)}
        let newValues = {$set: {values: req.body}}
        return resolve(updateMany("submissions", query, newValues))
    }).then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}

exports.deleteSubmissions = async (req, res) => {
    return new Promise(resolve => {
        let query = {_id: ObjectId(req.params.submissionId)}
        return resolve(deleteOne("submissions", query))
    }).then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}
