"use strict"

export class DomFacade{


    static empty(container) {
        container.innerHTML = "";
    }

    static cards(pet){

        return `<article class="pet-card">
                            
                            <h1>${pet.name}</h1>
                            <figure id="idImage"><img src="${pet.image}"></figure>
                            <span>${pet.description}</span>
                            <span>${pet.status}</span>
                            <button id="idEdit">Edit</button>
                            <button id="idDelete">Delete</button>
                       
                            </article>`;

    }


    static newAnimal(container) {

        container.innerHTML = "";

      return `<form id="animalForm" method="post" action="">
            <h2>Agregar Animal</h2>
            <div>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div>
                <label for="desc">Descripción:</label>
                <textarea id="desc" name="desc" rows="3" required></textarea>
            </div>

            <div>
                <label for="img">URL de la imagen:</label>
                <input type="text" id="img" name="img" placeholder="https://..." required>
            </div>

            <div>
                <label for="status">Estado:</label>
                <select id="status" name="status" required>
                    <option value="">Selecciona estado</option>
                    <option value="available">Disponible</option>
                    <option value="sold">Adoptado</option>
                    <option value="pending">En espera</option>
                </select>
            </div>
            <div>
                <button type="submit">Agregar Animal</button>
            </div>
        </form`;


    }


    static login() {

        return `<form id="loginForm" method="post" action="">
  <h2>Iniciar Sesión</h2>

  <div>
    <label for="username">Usuario o Email:</label>
    <input type="email" id="idEmail" name="email" required>
  </div>

  <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="idPassword" name="password" placeholder="Tu contraseña" required>
  </div>

  <div>
    <button type="submit">Iniciar Sesión</button>
    <button id="idGoRegister">Registrarse</button>
  </div>
`;


    }


    static register() {
      return  `<form id="registerForm" method="post" action="">
            <h2>Registro</h2>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required/>
            <button type="submit">Registrarse</button>
            <button id="idGoLogin">Login</button>
        </form>`
    }

}