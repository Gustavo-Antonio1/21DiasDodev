class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}

class Biblioteca {
        Nome
        Endereco
        Telefone
        AcervoDeLivros = []
        constructor(nome, endereco, telefone, acervoDeLivros) {
        this.Nome = nome
        this.endereco = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervoDeLivros
    }

        BuscarLivro(titulo) {
            this.AcervoDeLivros.forEach(livro => {
                if(livro.titulo == titulo) {
                    console.log(livro)
                }
            })
        }

        EmprestarLivro(titulo) {
            let emprestado = false
            this.AcervoDeLivros.forEach(livro => {
                if(livro.Titulo == titulo) {
                    if (livro.Disponibilidade == true) {
                        livro.Disponibilidade = false
                        emprestado = true
                    }
                }
            })
            if(emprestado) {
                return true
            } else{
                return false
            }
        }

        DevolverLivro(titulo){
                livros.forEach(livro => {
                    if(livro.Titulo = titulo) {
                        livro.Disponibilidade = true
                        console.log("Livro Devolvido")
                    }
                })
        }
}

let livros = []

livros.push(new Livro("livroA", "Gustavo", "amanhecer", 2000))
livros.push(new Livro("livroB", "Guilherme", "anoitecer", 2005))
livros.push(new Livro("livroC", "Evaldo", "alvorecer", 1980))
livros.push(new Livro("livroD", "Gislene", "luar", 1990))
livros.push(new Livro("livroE", "Jessica", "solar", 1997))
livros.push(new Livro("livroF", "Joao", "aurora", 1998))

let biblioteca = new Biblioteca("Dodev", "Rua Isabel 133", "2222-2222",)

biblioteca.BuscarLivro("livroB")
biblioteca.EmprestarLivro("livroA")
biblioteca.DevolverLivro("livroA")