"use strict"
import {StorageManager} from "./JS/storageManager.js";
import {EventManager} from "./JS/EventManager.js";
import {DomFacade} from "./JS/DomFacade.js";
import {AnimalsServicesFront} from "./JS/animals-services-front.js";

let session = StorageManager.load("user");

const sectionA = document.getElementById("idSection");
document.addEventListener("DOMContentLoaded", async function(e) {

    if(session.length !== 0) {
        sectionA.insertAdjacentHTML("beforeend", DomFacade.login(sectionA));

        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", async function(e) {

           await EventManager.validLogin(loginForm);

        });

    }else{
        let allAnimals = await AnimalsServicesFront.get();

        const newPet =document.createElement("button");
        newPet.id = "btnAdd";
        newPet.textContent = "Add pet";
        sectionA.appendChild(newPet);

        newPet.addEventListener("click", async function(e) {
          const newForm =  DomFacade.newAnimal(sectionA);
            sectionA.insertAdjacentHTML("beforeend", newForm);

                const newAnimalForm = document.getElementById("animalForm");

                newAnimalForm.addEventListener("submit", async function(e) {
                    await EventManager.newCard();
                    window.location.reload();
                })

        })


        allAnimals.forEach((animal) => {
            sectionA.insertAdjacentHTML("beforeend", DomFacade.cards(animal));

            const btnEdit = document.getElementById("idEdit");
            const btnDelete = document.getElementById("idDelete");

            btnEdit.addEventListener("click", async (e) => {

        });

            btnDelete.addEventListener("click", async (e) => {
              await EventManager.deleteCard(animal._id);
                window.location.reload();
            });

        });
    }



});