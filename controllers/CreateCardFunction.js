const uploadImage = require("./uploadImage");
const fs = require('fs');
const path = require('path');

const CreateCard = (req, res) => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();


    const { name, description } = req.body;
    const userId = req.user?.id;

    if(!userId){
        res.status(401).json({message: "Пользователь не аутентифицирован"});
        return;
    }

    if(!req.file){
        res.status(400).json({message: "Изображение не загружено"});
        return;
    }

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
                        userId: userId,
                    },
                })
        })
        .then((card)=>{
            res.status(201).json(card);

        })
        .catch((error) =>{
            console.error("Error creating card", error);
            res.status(500).json(error);
        });
}

module.exports = CreateCard;