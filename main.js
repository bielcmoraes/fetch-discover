const url  = 'http://localhost:5500/api'

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data)) //Mostrando o conteudo da promessa no html
    .catch(error => console.error(error))
}

function getUser(id) {
    fetch(url + '/' + id)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name //Mostrando o nome que vem da api na tag de id "userName" do arquivo html
        userCity.textContent = data.city //Mostrando a cidade que vem da api na tag de id "userCity" do arquivo html
        userAvatar.src = data.avatar //Mostrando a imagem quem vem da api na tag "userAvatar" do arquivo html
    })
    .catch( error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST", //Metodo da função fetch
        body: JSON.stringify(newUser), //Objeto que será postado no formato JSON
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data) //Avisa se o post foi realizado lá no HTML
    .catch(error => console.error(error))
}

const newUser = {
    name: "Gabriel Moraes",
    avatar: "http://picsum.photos/200/300",
    city: "Amélia Rodrigues"

}

function updateUser(updatedUser, id){
    fetch(url + "/" + id, {
        method: "PUT", //Metodo da função fetch
        body: JSON.stringify(updatedUser), //Objeto que será atualizado formato JSON
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data) //Resposta textual da api para o update
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Alterei o 9",
    avatar: "http://picsum.photos/200/300",
    city: "Cidade 9"
}

function deleteUser(id){
    fetch(url + '/' + id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data) //Resposta da remoção no HTML
    .catch(error => console.error(error))
}


//addUser(newUser)
//updateUser(updatedUser, 9)
deleteUser(6)
getUsers()
getUser(9)