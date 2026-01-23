"use strict"

class Animal {

    constructor(name, status, description, image){
        this.name = name;
        this.description = description;
        this.status = status;

        if(image === "" || image === null) {
            this.image = "https://httpstatusdogs.com/img/404.jpg";
        }else{
            this.image = image;
        }

        if(description === "" || description === null){
            this.description = "No description";
        }else{
            this.description = description;
        }
    }
}

module.exports = Animal ;