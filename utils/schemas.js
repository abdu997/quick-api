exports.submissionValues = (payload) => {
    let values = []
    payload.forEach(value => {
        let dict = value.values
        dict["_id"] = value._id
        dict["timestamp"] = value.timestamp
        values.push(dict)
    })
    return values
}