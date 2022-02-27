function userCreator() {

    document
        .querySelector('.Create')
        .classList
        .add('active')
}

function Fechar() {
    document
        .querySelector(".Create")
        .classList
        .remove('active')
}

function Searching() {
    const value = document.querySelector('#Nameuser').value

    const data = `https://api.github.com/users/${value}`

    fetch(data)
        .then(response => response.json())
        .then(Usercont => {
            userImage.src = Usercont.avatar_url
            userName.innerHTML = Usercont.name
            userLink.href = Usercont.html_url
            NameGit.innerHTML = Usercont.login
            Bio.innerHTML = Usercont.bio
        })

    document
        .querySelector(".Create")
        .classList
        .remove('active')
}