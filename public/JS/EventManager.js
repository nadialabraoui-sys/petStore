
import { AnimalsServicesFront } from "./animals-services-front.js";
import { UserServicesFront } from "./user-services-front.js";
import { ValidationManager } from "./ValidationManager.js";
import { StorageManager} from "./StorageManager.js";
export class EventManager{

   static async validLogin(form) {
        const email = document.getElementById("idEmail").value;
        const password = document.getElementById("idPassword").value;


        const allUsers = await UserServicesFront.get();

        if(allUsers.length === 0){

            alert("no hay usuarios");
        }



            allUsers.forEach(user => {
                if(user.email === email && user.password === password){

                    let session = [`${user.email}`, true];
                    StorageManager.save("user", session);

                    window.location.reload();

                }
            });
        }

        static async validRegister(form) {

            const email = document.getElementById("email");
            const password = document.getElementById("password").value;


                await UserServicesFront.post(email.value, password);
                window.location.reload();


        }


      static async deleteCard(id){
       await AnimalsServicesFront.delete(id);
    }

     static async updateCard(id, name, status, description, image) {

    }

    static async newCard(){

       const name = document.getElementById("name").value;
       const description = document.getElementById("desc").value;
       const image = document.getElementById("img").value;
       const status = document.getElementById("status").value;

       await AnimalsServicesFront.post(name, status, description, image);
    }

}
