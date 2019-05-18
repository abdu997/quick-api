const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 4000

const forms = require('./resources/forms')
const submissions = require('./resources/submissions')


app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/forms', forms.createForm)
app.get('/forms/:formId', forms.getForm)
app.put('/forms/:formId', forms.updateForm)
app.delete('/forms/:formId', forms.deleteForm)

app.post('/submissions', submissions.submit)
app.get('/submissions/:formId', submissions.getFormSubmissions)
app.put('/submissions/:submissionId', submissions.updateSubmissions)
app.delete('/submissions/:submissionId', submissions.deleteSubmissions)


app.listen(port);