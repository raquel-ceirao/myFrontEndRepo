var ajax;

if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+ ...
    ajax = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE 6 and older
    ajax = new ActiveXObject('Microsoft.XMLHTTP');
}

// run this when the ajax request completes
ajax.onreadystatechange = function() {

  if (ajax.readyState === 4 && ajax.status === 200) {
    
    var responsejsonobj = JSON.parse(ajax.responseText);

    var usersTable = document.getElementById('users-table');

    for(var i = 0; i < responsejsonobj.length; i++) {
        
        var row = usersTable.insertRow(-1);

        var firstNameCell = row.insertCell(0);
        var lastNameCell = row.insertCell(1);
        var emailCell = row.insertCell(2);
        var phoneCell = row.insertCell(3);
        var showButton = row.insertCell(4);
        var editButton = row.insertCell(5);
        var deleteButton = row.insertCell(6);

        firstNameCell.innerHTML = responsejsonobj[i].firstName;
        lastNameCell.innerHTML = responsejsonobj[i].lastName;
        emailCell.innerHTML = responsejsonobj[i].email;
        phoneCell.innerHTML = responsejsonobj[i].phone;

        showButton.innerHTML = "<button type='button' class='btn btn-success'>Show</button>" 
        editButton.innerHTML = "<button type='button' class='btn btn-secondary'>Edit</button>";
        deleteButton.innerHTML = "<button type='button' class='btn btn-danger'>Delete</button>";

    }

  }
};

ajax.open('GET', 'http://localhost:8080/javabank5/api/customer/', true);
ajax.setRequestHeader('Content-type', 'application/json');
ajax.send();

/* List customer data using the DOM API

var customerData = [
    {"id":1,"firstName":"Rui","lastName":"Ferrão","email":"rui@gmail.com","phone":"777888"},
    {"id":2,"firstName":"Sergio","lastName":"Gouveia","email":"sergio@gmail.com","phone":"777999"},
    {"id":3,"firstName":"Bruno","lastName":"Ferreira","email":"bruno@gmail.com","phone":"777666"},
    {"id":4,"firstName":"Rodolfo","lastName":"Matos","email":"rodolfo@gmail.com","phone":"777333"}
];

function populateTable() {

    var usersTable = document.getElementById('users-table');

    for(var i = 0; i < customerData.length; i++) {
        
        var row = usersTable.insertRow(-1);

        var firstNameCell = row.insertCell(0);
        var lastNameCell = row.insertCell(1);
        var emailCell = row.insertCell(2);
        var phoneCell = row.insertCell(3);
        var showButton = row.insertCell(4);
        var editButton = row.insertCell(5);
        var deleteButton = row.insertCell(6);

        firstNameCell.innerHTML = customerData[i].firstName;
        lastNameCell.innerHTML = customerData[i].lastName;
        emailCell.innerHTML = customerData[i].email;
        phoneCell.innerHTML = customerData[i].phone;

        showButton.innerHTML = "<button type='button' class='btn btn-success'>Show</button>" 
        editButton.innerHTML = "<button type='button' class='btn btn-secondary'>Edit</button>";
        deleteButton.innerHTML = "<button type='button' class='btn btn-danger'>Delete</button>";

    }
}

window.onload = function() {
    populateTable();
}*/