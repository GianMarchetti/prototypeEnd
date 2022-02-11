// Clase 1

class User {
    constructor({ name, lastname, movies, pets }) {
        this.name = name;
        this.lastname = lastname;
        this.movies = movies;
        this.pets = pets;
    }

    getFullName() {
        return `${this.name} ${this.lastname}`
    }
    addMascota(pet) {
        return this.pets.push(pet)
    }
    countMascotas() {
        return this.pets.length;
    }
    addMovie(title, premiere) {
        return this.movies.push({ title, premiere })
    }
    getMovieNames() {
        return this.movies.map(tittle => tittle);
    }
    getMascotasNames() {
        return `${this.pets}`
    }
}

let response = ['Harry Potter and the Prisioner of Azkaban', '06/04/2004',
    'The Lords of Rings: The Two Towers', '11/18/2002',
    'Star Wars: Episode III, The Revenge of the Sith', '05/15/2005',
]

let data = {
    name: 'Gian',
    lastname: 'Marchetti',
    age: '21',
    price: 8000,
    pets: [
        'Goro',
        'Tyson',
        'Chiqui',
    ],
    movies: [{
            tittle: 'Harry Potter and the Prisioner of Azkaban',
            premiere: '06/04/2004',
            protagonist1: 'Harry Potter',
            protagonist2: 'Hermione Grenger',
            protagonist3: 'Ron Wesley',
        },
        {
            tittle: 'The Lords of Rings: The Two Towers',
            premiere: '11/18/2002',
            protagonist1: 'Bilbo Bolson',
            protagonist2: 'Samsagaz Gamyi',
            protagonist3: 'dúnadan Aragorn',
        },
        {
            tittle: 'Star Wars: Episode III, The Revenge of the Sith',
            premiere: '05/15/2005',
            protagonist1: 'Anakin Skywalker',
            protagonist2: 'Obiwan Kenobi',
            protagonist3: 'Padmé Amidala',
        }
    ]
}

let Gian = new User(data);
Gian.addMascota('Mishi')
Gian.addMovie('Piratas del Caribe', '11/26/1999')
console.log(Gian.getFullName());
console.log(Gian.getMovieNames());
console.log(Gian.getMascotasNames());
