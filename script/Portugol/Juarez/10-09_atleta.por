programa
{
	
	funcao inicio()
	{
		caracter sexo
		real altura, peso, idade

		escreva("Digite a idade: ")
		leia(idade)
		escreva("Digite o sexo (M/F): ")
		leia(sexo)
		escreva("Digite a altura (ex: 1.85): ")
		leia(altura)
		escreva("Digite o peso (ex: 80.5): ")
		leia(peso)

		se (sexo == 'M' e altura >= 1.80 e peso >= 75)
		{
			escreva("Aceito")
		}
		senao
		{
			escreva("Não aceito")
		}
	}
}