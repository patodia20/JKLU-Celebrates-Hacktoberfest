function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
function add_elements(){
    let data = [
        {
            "name":"Geetanshu Mathur",
            "branch":"Computer Science and Engineering (VII Semester)",
        },
        {
            "name":"Sharthak Vijayvergiya",
            "branch":"Computer Science and Engineering (VII Semester)",
        },
    ]
    par = document.getElementById("participants")
    data.forEach(element => {
        var student  = document.createElement("div");
        student.className = "student"

        var name = document.createElement("div");
        name.className = "name";
        name.appendChild(document.createTextNode(element.name));

        var branch = document.createElement("div");
        branch.className = "branch";
        branch.appendChild(document.createTextNode(element.branch));

        student.appendChild(name);
        student.appendChild(branch);

        par.appendChild(student);
    });
}
add_elements()