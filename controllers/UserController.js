
const UserController = (req, res) =>{
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    const userId = req.user.id
    if(!userId) return res.status(401).json({ message: `Пользователь не авторизован` });

    prisma.user.findUnique({
        where: {id: userId},
        select: {
            name: true,
            email: true,
        }
    }).then(user => {
        res.status(200).json(user);
    }).catch(err => {res.status(500).json({message: `Пользователь не найден`});})
}
module.exports = UserController