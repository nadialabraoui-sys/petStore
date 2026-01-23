"use strict"

const URI = "http://localhost:3000/petstore";
export class AnimalsServicesFront{

        static async get(){
            try {

                let res = await fetch(URI);

                if (!res.ok) {
                    console.log("Couldn't process request");
                    return [];
                }

                return await res.json();

            }catch(e){
                console.log(e);
                return [];
            }

        }

       static async getById(id){
            try {

                let res = await fetch(URI + "/" + id,);

                if (!res.ok) {
                    console.log("Couldn't process request");
                    return false;
                }

                return await res.json();

            }catch(e){
                console.log(e);
                return false;
            }


        }

    static async delete(id){
        try {

            let res = await fetch(URI + "/" + id, {
                method: 'DELETE',
            });

            if (!res.ok) {
                console.log("Couldn't process request");
                return false;
            }

            return true;

        }catch(e){
            console.log(e);
            return false;
        }

    }

    static async update(id, name, status, description, image){
        try {

            let res = await fetch(URI + "/" + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "image": image,
                    "name": name,
                    "description": description,
                    "status": status
                })
            });

            if (!res.ok) {
                console.log("Couldn't process request");
                return false;
            }

            return true;

        }catch(e){
            console.log(e);
            return false;
        }

    }

    static async post(name, status, description, image){
        try{
            let res = await fetch(URI, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "image": image,
                    "name": name,
                    "description": description,
                    "status": status
                })
            });
            if (!res.ok){
                console.log("Couldn't process request");
                return false;
            }

            const data = await res.json();
            return data;

        }catch (e){
            console.error(e);
            return false;
        }
    }


}