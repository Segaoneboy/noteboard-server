const uploadImage = require("./uploadImage");

const CreateCard = (req, res) => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    const fs = require('fs');
    const path = require('path');

    const { name, description } = req.body;
    const image = req.file.path;
    uploadImage(image, req.file.filename)
        .then((imageUrl) => {
            if(!imageUrl){
                throw new Error('Не удалось получить ссылку')
            }
            fs.unlink(image, (err) => {
                if(err){
                    console.error(err);
                }
            });

            return prisma.card
                .create({
                    data: {
                        name,
                        description,
                        image: imageUrl,
                    },
                })
        })
        .then((card)=>{
            res.redirect("/?success=1");

        })
        .catch((error) =>{
            console.error("Error creating card", error);
            res.redirect("/?success=0")
        });
}

module.exports = CreateCard;