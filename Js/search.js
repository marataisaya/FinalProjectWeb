var form = document.getElementById("myForm")


form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = "";
    
    fetch("https://my-json-server.typicode.com/marataisaya/demo/login/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
        <b>Email:</b> ${data.email} <br>
        <b>Password:</b> ${data.password}
        `
    })
})
