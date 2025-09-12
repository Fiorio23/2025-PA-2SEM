programa
{
	funcao inicio()
	{
		caracter avaliacao

		escreva("Digite a avaliação do aluno (A, B, C, D ou E): ")
		leia(avaliacao)

		se (avaliacao == 'A' ou avaliacao == 'B' ou avaliacao == 'C')
		{
			escreva("Promovido")
		}
		senao se (avaliacao == 'D' ou avaliacao == 'E')
		{
			escreva("Retido")
		}
		senao
		{
			escreva("Avaliação Inválida")
		}
	}
}