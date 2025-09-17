
programa
{
	funcao inicio()
	{
		real altura, pesoIdeal
		caracter sexo
 
		escreva("Digite a altura (ex: 1.75): ")
		leia(altura)
		escreva("Digite o sexo (M/F): ")
		leia(sexo)
 
		se (sexo == 'M')
		{
			pesoIdeal = (72.7 * altura) - 58
			escreva("Seu peso ideal é: ", pesoIdeal, " kg")
		}
		senao se (sexo == 'F')
		{
			pesoIdeal = (62.1 * altura) - 44.7
			escreva("Seu peso ideal é: ", pesoIdeal, " kg")
		}
		senao
		{
			escreva("Sexo inválido. Por favor, digite M ou F.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */