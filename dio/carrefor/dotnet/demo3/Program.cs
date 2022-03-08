// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using static System.Console;

public class Program
{
    static void TrocarNome(string nome, string nomeNovo)
    {
        nome = nomeNovo;        
    }
    
    public static void Main()
    {
        string nome = "prof. Ricardo";
        
        TrocarNome(nome, "Junior");
        WriteLine($"O novo nome é : {nome}"); // aqui mostra o nome do main        
       
    }
};