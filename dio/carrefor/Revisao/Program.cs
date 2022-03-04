using System;

namespace Revisao
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno[] alunos = new Aluno[100];
            var indiceAluno = 0;
            string opcaoUsuario = ObterOpcoesUsuario();

            while (opcaoUsuario.ToUpper() != "X")
            {
                switch (opcaoUsuario)
                {
                    case "1":
                        Console.WriteLine("Informa o nome do aluno");
                        var aluno = new Aluno();
                        aluno.Nome = Console.ReadLine();

                        Console.WriteLine("Informe a nota do aluno");
                        if (decimal.TryParse(Console.ReadLine(), out decimal nota))
                        {
                            aluno.Nota = nota;
                        }
                        else
                        {
                            throw new ArgumentException("O valor da nota de ser DECIMAL");
                        }

                        alunos[indiceAluno] = aluno;
                        indiceAluno++;
                        break;

                    case "2":
                        foreach (var a in alunos)
                        {
                            if (a.Nome != null)
                            {
                                Console.WriteLine($"Aluno: {a.Nome} - Nota : {a.Nota}");
                            }
                        }

                        break;
                    case "3":
                        decimal notaTotal = 0;
                        var nrAlunos = 0;

                        for (int i = 0; i < alunos.Length; i++)
                        {
                            if (alunos[i].Nome != null)
                            {
                                notaTotal = notaTotal + alunos[i].Nota;
                                nrAlunos++;
                            }
                        }
                        var mediaClasse = notaTotal / nrAlunos;


                        Console.WriteLine($"nota total:  {notaTotal}");
                        Console.WriteLine($"numero de alunos:  {nrAlunos}");
                        Console.WriteLine($"media da classe:  {mediaClasse}");

                        Conceito conceitoGeral;
                        if (mediaClasse < 4)
                        {
                            conceitoGeral = Conceito.E;
                        }
                        else if (mediaClasse < 6)
                        {
                            conceitoGeral = Conceito.D;
                        }
                        else if (mediaClasse < 8)
                        {
                            conceitoGeral = Conceito.C;
                        }
                        else if (mediaClasse < 10)
                        {
                            conceitoGeral = Conceito.B;
                        }
                        else
                        {
                            conceitoGeral = Conceito.A;
                        }



                        Console.WriteLine($"Conceito Geral: {conceitoGeral}");
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }
                opcaoUsuario = ObterOpcoesUsuario();
                Console.WriteLine();

            }


        }

        private static string ObterOpcoesUsuario()
        {
            Console.WriteLine();
            Console.WriteLine("Informe a opcao?");
            Console.WriteLine("1- Inserir nome do aluno");
            Console.WriteLine("2- Listar Alunos");
            Console.WriteLine("3- Calcular media geral");
            Console.WriteLine("X- Sair");
            Console.WriteLine();

            string? opcaoUsuario = Console.ReadLine();
            Console.WriteLine();
            return opcaoUsuario;


        }
    }
}
