const {PrismaClient} = require("@prisma/client");

const CreateCard = (req, res) => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    const fs = require('fs');
    const path = require('path');

    const { name, description} = req.body;
    const image = path.posix.join('uploads', req.file.filename);

    prisma.card
        .create({
        data: {
            name,
            description,
            image,
        },
    })
        .then((card)=>{
            res.status(201).json(card);
        })
        .catch((error) =>{
            console.error("Error creating card", error);
            res.status(500).json({error: "Ошибка сервера"})
        });
}

module.exports = CreateCard;