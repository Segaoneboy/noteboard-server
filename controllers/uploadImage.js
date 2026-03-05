
const fs = require('fs');
const mime = require('mime-types');
const supabase = require('../supabase');

function uploadImage(localPath, filename){
    return new Promise((resolve, reject) => {
        fs.readFile(localPath, (err, buffer) => {
            if (err){
                console.error('Ошибка чтения файла', err)
                return reject(err);

            }
            const contentType = mime.lookup(filename)
            supabase.storage
                .from('cards')
                .upload(filename, buffer, {
                    contentType: contentType,
                    upsert: true
                })
                .then(({error}) =>{
                    if(error){
                        console.error('Ошибка при загрузке в supabase', error)
                        return reject(error);

                    }
                    const { data } = supabase.storage.from('cards').getPublicUrl(filename);
                    const publicUrl = data.publicUrl;
                    resolve(publicUrl);
                })
                .catch(err => reject(err));
        })
    })
}
module.exports = uploadImage;