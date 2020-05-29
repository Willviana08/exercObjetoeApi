var receita = {
	titulo:"vitamina morango",
	porcoes: 1,
	ingredientes: ["morango","leite","1/2 colher de açucar"],
	preparo: "liquitificador"

};

console.log(receita.titulo);
console.log(receita.porcoes);
console.log(receita.ingredientes);
console.log(receita.preparo);

for (i=0; i<receita.ingredientes.length; i++) {
	console.log(receita.ingredientes[i]);
}

let livros = [{

        titulo: "Naruto",
        autor: "Masashi Kishimoto",
        livrolido: true,
    },
    {
        titulo: "Dragon Ball Z",
        autor: "Akira Toriyama",
        livrolido: true,
    },

    {
        titulo: "Jason Bourne",
        autor: "Robert Ludlum",
        livrolido: true,
    },

    {
        titulo: "Palestina",
        autor: "Saraiva",
        livrolido: false,
    }
]


for (i = 0; i < livros.length; i++) {
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if (livros[i].livrolido == true) {
        console.log("Já leu");

    } else

        console.log("Ainda não leu este livro");
}
