import { createInterface } from 'readline'
import { adicionarLivro, filtrarLivroPorTitulo, marcarComoNaoLido, marcarComoLido, removerLivro } from './crud.js'

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
})

const livros = [
    {
        titulo: 'O Hobbit',
        autor: 'Tolkien',
        categoria: 'Aventura',
        lido: true
    },
    {
        titulo: 'O Senhor dos Anéis',
        autor: 'Tolkien',
        categoria: 'Aventura',
        lido: false
    }
]

console.log('Bem vindo a sua biblioteca particular!\n')

reader.question('O que gostaria de fazer?\n a) Adicionar novo livro \n b) Listar livros \n c) Marcar como lido/não lido \n d) Remover livro \n e) Sair \n > ', crud => {
    // Adiciona um novo livro
    if (crud.toLowerCase() === 'a') {

        reader.question('\nDigite o título do livro: ', titulo => {
            reader.question('\nDigite o autor do livro: ', autor => {
                reader.question('\nDigite a categoria do livro: ', categoria => {
                    reader.question('\nJá foi lido? (Sim ou Não): ', lido => {
                        const novo_livro = adicionarLivro(titulo, autor, categoria, lido, livros)
                        console.log('\nLivro adicionado com sucesso!')
                        console.log('Livros atuais:\n', livros) 
                        reader.close()
                    })
                })
            })

        })

        // Listar livros
    } else if (crud.toLowerCase() === 'b') {

        console.log('\nLivros atuais:')
        for (let livro of livros) {
            console.log(livro)
            console.log('\n')
        }
        reader.close()

        // Marcar com lido/não lido
    } else if (crud.toLowerCase() === 'c') {

        reader.question('\nQual livro você gostaria de marcar como lido/não lido? ', titulo => {

            const livroFiltrado = filtrarLivroPorTitulo(livros, titulo.toLowerCase())
            if (livroFiltrado.length === 0) {
                console.log('\nEsse livro não existe na sua biblioteca!\n')
                reader.close()
            } else {
                console.log(livroFiltrado)
                // Destructuring para extrair apenas a infoprmação que precisamos, se foi lido ou não
                const { lido } = livroFiltrado[0]
                if (lido) {
                    reader.question('Deseja marcar como não lido? (Sim/Não) \n > ', answer => {
                        const success = marcarComoNaoLido(answer, livroFiltrado[0])
                        if (success) {
                            console.log(livroFiltrado[0])
                            console.log('\nLivro marcado como não lido!')
                        } else {
                            console.log('\nNenhuma alteração foi feita.')
                        }
                        reader.close()
                    })

                } else {
                    reader.question('Deseja marcar como lido? (Sim/Não) \n > ', answer => {
                        const success = marcarComoLido(answer, livroFiltrado[0])
                        if (success) {
                            console.log(livroFiltrado[0])
                            console.log('\nLivro marcado como lido!')
                        } else {
                            console.log('\nNenhuma alteração foi feita.')
                        }
                        reader.close()
                    })
                }
            }
        })

        // Remover Livro
    } else if (crud.toLowerCase() === 'd') {

        reader.question('Qual livro deseja remover? ', titulo => {
            const indexLivroParaRemover = removerLivro(livros, titulo.toLowerCase())
            if (indexLivroParaRemover === -1) {
                console.log('\nEsse livro não existe na sua biblioteca.\n')
            } else {
                livros.splice(indexLivroParaRemover, 1) // remove livro no array
                console.log('\nLivro removido com sucesso!\n')
                console.log('Livros restantes: \n', livros)
            }

            reader.close()
        })


        // Sair
    } else if (crud.toLowerCase() === 'e') {
        reader.close()
    } else {
        console.log('Ação inválida!')
        reader.close()
    }

})

