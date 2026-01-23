"use strict"
import { StorageManager} from "./JS/storageManager.js";
import {DomFacade} from "./JS/DomFacade.js";

import {AnimalsServices} from "../services/animals-services.js";
let session = StorageManager.load("user");

const sectionA = document.getElementById("idSection");
document.addEventListener("DOMContentLoaded", async function(e) {

    if(session) {
        sectionA.insertAdjacentHTML("beforeend", DomFacade.login(sectionA));

    }else{
        let allAnimals = await AnimalsServices.get();

        allAnimals.forEach((animal) => {
            sectionA.insertAdjacentHTML("beforeend", DomFacade.cards(animal));


        });
    }



})