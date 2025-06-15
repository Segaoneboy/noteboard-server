
const GetAllCards = (req, res) =>{
    let counter = 0;
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    prisma.card.findMany({
    })
        .then((cards) => {
            cards.map(card => {

            })
        })
        .catch((err) =>{
            console.error("Ошибка при получении карточек", err);
            res.status(500).json({error: "Ошибка сервера"})
        })
}
module.exports = GetAllCards