// GET BUTTOM FOR CALLBACK FUNCTION
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUser").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);

// WILL FETCH FILE AND STORE DATA
// function getText() {
//     fetch('simple.txt')
//     .then(function(respone) {
//         return respone.text();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

function getText() {
    fetch('simple.txt')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function getUsers() {
    fetch('Users.json')
    .then((response) => response.json())
    .then((data) => {
        let output = '<h2>User Info</h2>';
        data.forEach(function(user) {
            output +=
            `
            <ul>
                <li>ID: ${user.id} </li>
                <li>Name: ${user.name} </li>
                <li>Email: ${user.email} </li>
            </ul>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
}


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        let output = '<h2>User Info</h2>';
        data.forEach(function(post) {
            output +=
            `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
}