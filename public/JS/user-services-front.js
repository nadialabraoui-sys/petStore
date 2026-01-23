"use strict"

const URI = "http://localhost:3000/petstore/user";
export class UserServicesFront{

    static async get(){
        try {

            let allItems = [];
            let res = await fetch(URI);

            if (!res.ok) {
                console.log("Couldn't process request");
                return [];
            }

           let data = await res.json();

            for(let item of data){
                allItems.push(item);
            }

            return allItems;
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

    static async update(id, email, password){
        try {

            let res = await fetch(URI + "/" + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
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

    static async post(email, password){
        try{
            let res = await fetch(URI, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                })
            });
            if (!res.ok){
                console.log("Couldn't process request");
                return false;
            }

            return true;

        }catch (e){
            console.log(e);
            return false;
        }
    }


}