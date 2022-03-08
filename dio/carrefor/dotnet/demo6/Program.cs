// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");


using static System.Console;

public class Program
{
    static bool EncontradoPessoa(List<Pessoa> pessoas, Pessoa pessoa)
    {
        foreach (var item in pessoas)
        {
            if (item.Nome == pessoa.Nome)
                return true;
        }
        return false;
    }

    public static void Main()
    {
        List<Pessoa> pessoas = new List<Pessoa>()
       {
           new Pessoa(){Nome = "osvaldo"},
           new Pessoa(){Nome = "rapha"},
           new Pessoa(){Nome = "maria"},
           new Pessoa(){Nome = "julia"},
           new Pessoa(){Nome = "paulo"},
           new Pessoa(){Nome = "fernando"}
       };

        WriteLine("Digite a pessoa que gostaria de localizar: ");
        var nome = ReadLine();
        var pessoa = new Pessoa() { Nome = nome };
        var encontrado = EncontradoPessoa(pessoas, pessoa);
        if (encontrado)
        {
            WriteLine("Pessoa locarizada: ");
        }
        else
        {
            WriteLine("Pessoa não localizada: ");
        }
    }
};