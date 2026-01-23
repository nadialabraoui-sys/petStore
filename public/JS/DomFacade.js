"use strict"

export class DomFacade{


    static empty(container) {
        container.innerHTML = "";
    }

    static cards( pet){

        return `<article id="pet-card">
                            <card>
                            <h1>${pet.name}</h1>
                            <figure id="idImage"><img src="${pet.image}"></figure>
                            <span>${pet.description}</span>
                            <span>${pet.status}</span>
                            <button id="idEdit">Edit</button>
                            <button id="idDelete">Delete</button>
                            </card>
                            </article>`;


    }


    static newAnimal(container) {

      let form =  `<form id="animalForm">
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
                <input type="url" id="img" name="img" placeholder="https://..." required>
            </div>


            <div>
                <label for="type">Tipo:</label>
                <select id="type" name="type" required>
                    <option value="">Selecciona tipo</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Otro">Otro</option>
                </select>
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

      container.appendChild(form);

    }


    static login() {

        return `<form id="loginForm">
  <h2>Iniciar Sesión</h2>

  <!-- Usuario / Email -->
  <div>
    <label for="username">Usuario o Email:</label>
    <input type="text" id="username" name="username" placeholder="Tu usuario" required>
  </div>

  <!-- Contraseña -->
  <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" placeholder="Tu contraseña" required minlength="6">
  </div>

  <!-- Botón -->
  <div>
    <button type="submit">Iniciar Sesión</button>
  </div>

  <!-- Mensaje de error -->
  <p id="loginError" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
</form>
`;


    }

}