# quick-api
An API that has all the CRUD protocols that you need predefined! You can create collections and operate CRUD protocols on these collections using the power of API calls.

## Requirments
* Node
* Nodemon. If you dont have it, run 
```sh 
$ npm i -g nodemon
```
* MongoDB, running on `mongodb://127.0.0.1:27017/`

## Installation 
```sh 
$ npm i
$ node initdb.js
```

## To start
```sh 
$ npm start
```

## Recommendation
Use the `react-formgen` ReactJS package to populate the form view on the front end.
Use the `react-tablegen` ReactJS package to populate the table view for submission entries.

## Usage 
### Creating a form structure
Make a `POST` request to `http://localhost:4000` with a similar schema below, to create a form.

```json
{
    "name": "Sign up",
    "slug": "sign-up",
    "meta": {},
    "structure": [
        {
            "key": "first_name",
            "label": "First name",
            "type": "text"
        },
        {
            "key": "last_name",
            "type": "text",
            "label": "last name"
        },
        {
            "key": "check",
            "type":"checkbox",
            "label": "Checkbox test"
        },
        {
            "key": "list",
            "type":"dropdown",
            "label": "This is a dropdown",
            "options": [
                {
                    "label": "hello",
                    "value": "no"
                }
            ]
        },
        {
            "key": "submit",
            "type": "submit",
            "placeholder": "Submit",
            "className": "waves-effect waves-light btn"
        }
    ]
}
```
Once the request is made, you will receive a formId hash in a payload as this.
```json 
{
    "formId": "xxxxxxxxxxxxxxxxx"
}
```

### Retrieve Form
Make a `GET` request to `http://localhost:4000/forms/<formId>` to retreive the form that you have created.

### Update Form
Make a `PUT` request to `http://localhost:4000/forms/<formId>` with a json body payload using a schema similar as to one for creating a form.

### Delete Form
Make a `DELETE` request to `http://localhost:4000/forms/<formId>` and the form will be deleted.

### Create Form Submissions
Make a `POST` request to `http://localhost:4000/submissions/<formId>`, the body payload will be passed into the databas, as is.

### Retrieve Submissions of A Form
Make a `GET` request to `http://localhost:4000/submissions/<formId>` to retreive all submissions made to the form.

### Update a Form Submission
Make a `PUT` request to `http://localhost:4000/submissions/<submission_ID>` with a json body payload, and the submission will be replaced with the body payload.

### Delete a Submission
Make a `DELETE` request to `http://localhost:4000/submissions/<submission_ID>` and the submisssion will be deleted.



