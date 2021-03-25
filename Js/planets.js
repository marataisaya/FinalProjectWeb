
  var myArray = [
    {'planet':'Mercury', 'position':'1', 'radius':'2440 km', 'days':'58,5 earth days'},
    {'planet':'Venus', 'position':'2', 'radius':'6050 rm', 'days':'343 earth days'},
    {'planet':'Earth', 'position':'3', 'radius':'6370 km', 'days':'686 earth days'},
    {'planet':'Mars', 'position':'4', 'radius':'3390 km', 'days':'24 hours 37 minutes 23 seconds'},
    {'planet':'Jupiter', 'position':'5', 'radius':'71 490 km', 'days':'9 hours 55 minutes'},
    {'planet':'Saturn', 'position':'6', 'radius':'60 270 km', 'days':'10 hours 33 minutes'},
    {'planet':'Uranus', 'position':'7', 'radius':'25 560 km', 'days':'17 hours 14 minutes '},
    {'planet':'Neptune', 'position':'8', 'radius':'24 760 km', 'days':'16 hours 6 minutes'},
]


$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log('Value:', value)
    var data=searchTable(value, myArray)
    buildTable(data)
})

buildTable(myArray)
function searchTable(value, data){
    var filteredData=[]

    for(var i=0; i<data.length; i++){
        value = value.toLowerCase()

        var planet=data[i].planet.toLowerCase()

        if(planet.includes(value)){
            filteredData.push(data[i])
        }
    }
    return filteredData
}


function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].planet}</td>
                        <td>${data[i].position}</td>
                        <td>${data[i].radius}</td>
                        <td>${data[i].days}</td>
                   </tr>`
        table.innerHTML += row
    }
}


