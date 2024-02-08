// Luis Leal - Califación 10/5

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $username = document.querySelector(".name");

// Mandar a llamar a una clase y no a un id.
const $userBlog = document.querySelector(".blog");

const $userLocation = document.querySelector(".location");

// Se agregó que también se mostrara la imagen
const $avatar = document.querySelector("#avatar");

// Se añadió async para esperar la respuesta de la API
async function displayUser(username) {
    $username.textContent = "cargando...";
    const response = await fetch(`${usersEndpoint}/${username}`);

    // Se obtiene la respuesta y la pasamos en formato json
    data = await response.json();

    // Se sustituye '' por `` al estar usando template string ${}
    githubUser = `${data.name}`;
    $username.textContent = githubUser;
    $userBlog.textContent = `${data.blog}`;
    $userLocation.textContent = `${data.location}`;

    // Se agrega la información al elemento img para mostrar el avatar
    $avatar.src = `${data.avatar_url}`;
    $avatar.alt = githubUser;
}

function handleError(err) {
    console.log("OH NO!");
    console.log(err);
    n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
