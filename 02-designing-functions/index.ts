
import fetch from 'node-fetch';

fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    })
