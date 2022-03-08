// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using static System.Console;

public class Program
{
    static void Demo2()
    {
        Pessoa p1 = new Pessoa();
        p1.Idade = 48;
        p1.Nome = "Osvaldo";
        p1.Document = "Loren ";

        var p2 = p1.Clone();

        TrocarNome(p1, "junior");

        WriteLine($"o novo nome é : {p1.Nome} ");

        WriteLine($@"
        Na funcao:
          o nome de p1 é : {p1.Nome}
          o nome de p2 é : {p2.Nome}
         ");
    }
    public static void Main()
    {
        Demo2();

        StructPessoa p1 = new StructPessoa()
        {
            Document = "1234",
            Idade = 30,
            Nome = "rapha"
        };

        var p2 = p1;

        p2 = TrocarNome(p2, "Raphinha");

        WriteLine($@"
        Na struct:
        O nome do p1 foi : {p1.Nome}
        O nome do p2 foi : {p2.Nome}
        ");


        StructPessoa p = default;
        p.Nome = "cilene";
        p.Idade = 25;
        p.Document = "54329";
    }
    static void TrocarNome(Pessoa p1, string nomeNovo)
    {
        p1.Nome = nomeNovo;
    }
    static StructPessoa TrocarNome(StructPessoa p1, string nomeNovo)
    {
        p1.Nome = nomeNovo;
        return p1;
    }

}

