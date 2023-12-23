function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    };
 return fetch("http://localhost:3000/users", configurationObject)
    .then(function (repsonse) {
        return repsonse.json();
    })
    .then(function (data) {
        console.log(data)
      document.body.innerHTML = data.id
    })

    .catch(function (error) {
        alert("user failed");
        console.log(error.message)
        document.body.innerHTML = error.message
    })
};