// Clase 4 - Desafio 2------------------------------------------------

const fs = require('fs');


class Contenedor {
    constructor(file, id) {
        this.file = file;
        this.id = 0;
    }
    async save(productos) {
        // let contar = this.id += 1;
        const producto = await this.getAll();
        console.log(producto)
        let nuevoProducto = {...productos, id: this.id += 1 }
        producto.push(nuevoProducto)
        try {
            await fs.writeFile(this.file, JSON.stringify(productos, null, 2))
            return nuevoProducto.id
        } catch (error) {
            console.log('Surgio un error al guardar', error)
        }
    }
    getById(id) {
        try {
            let data = fs.readFileSync(this.file, 'utf-8', (err, data) => {
                const filtered = data.filter(function(array) {
                    return array.id === 1;
                })
            });
            console.log('mi data', data)
        } catch (error) {
            console.log(error)
        }
    }
    getAll() {
        try {
            let data = fs.readFileSync(this.file);
            return JSON.parse(data)
                // console.log(data)
        } catch (error) {
            console.log(error)
            return []
        }
    }
    async deleteById(id) {
        let data = await fs.unlinkFile(this.file, this.id, (err, data) => {
            if (err) { console.log('Fallamos!') } else {
                const found = data.find(id => id < 2)
                console.log('Pudimos', data)
            }
        });
    }
    async deleteAll() {
        await fs.writeFile(this.file, '', (err, data) => {
            if (err) { console.log('Fallamos!') } else {
                console.log('Pudimos', data)
            }
        });
    }
}

const productos = new Contenedor("productos.txt");
module.exports = productos

console.log('inicio del programa')

const mFile = process.argv[2];
console.log('My Archivo', mFile)
let userContenedor = new Contenedor(mFile);

userContenedor.save([{ "name": "marta", "price": 200, "thumbnail": "https://" }, { "name": "carlos", "price": 400, "thumbnail": "https://" }, { "name": "Gian", "price": 800, "thumbnail": "https://" }]);
userContenedor.getById();
userContenedor.getAll();
userContenedor.deleteById();
userContenedor.deleteAll();

console.log('Fin del Programa')

module.exports = Contenedor

// .