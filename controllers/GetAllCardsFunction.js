
const GetAllCards = (req, res) =>{
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    prisma.card.findMany()
        .then((cards) => {
            res.status(200).json(cards)
        })
        .catch((err) =>{
            console.error("Ошибка при получении карточек", err);
            res.status(500).json({error: "Ошибка сервера"})
        })
}
module.exports = GetAllCards