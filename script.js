fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
    .then(
        res=> {
            res.json().then(
                data => {
                    console.log(data.data);
                    if(data.data.length > 0){
                        var temp = "";
                        data.data.forEach((i) => {
                            temp += "<tr>";
                            temp += "<td>" + i.name + "</td>";
                            temp += "<td>" + i.office + "</td>";
                            temp += "<td>" + i.position + "</td>";
                            temp += "<td>" + i.salary + "</td> </tr>";
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
