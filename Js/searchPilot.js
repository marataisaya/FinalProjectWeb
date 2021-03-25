var form = document.getElementById("myFormPilot")


form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("searchPilots").value

    var originalName = search.split(' ').join('')

    document.getElementById("resultPilot").innerHTML = "";
    
    fetch("https://my-json-server.typicode.com/marataisaya/demo/pilots/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("resultPilot").innerHTML = `
        <b>Photo:</b> <img src="${data.photo}"/> </br>
        
        `
    })
})