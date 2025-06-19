
const GetAllCards = (req, res) =>{
    let counter = 0;
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    const limit = 10
    const page = parseInt(req.query.page) || 1;
    const skip = (page-1) * limit;
    prisma.card.findMany({
        skip: skip,
        take: limit,
        orderBy: {
            createdAt: 'desc',
        }
    })
        .then((cards) => {
            prisma.card.count()
                .then(total => {
                    res.status(200).json({
                        cards,
                        total,
                        page,
                        totalPages: Math.ceil(total / limit),
                    })
                })
                .catch(err => {
                    res.status(500).json({ error: 'Ошибка сервера при подсчёте'})
                })
        })
        .catch((err) =>{
            console.error("Ошибка при получении карточек", err);
            res.status(500).json({error: "Ошибка сервера"})
        })
        .finally(() => {
            prisma.$disconnect();
        })
}
module.exports = GetAllCards