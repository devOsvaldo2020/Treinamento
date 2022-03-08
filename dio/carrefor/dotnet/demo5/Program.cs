// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using static System.Console;


public class Program
{
    static int encontrarNumero(int[] numeros, int numero)
    {
        for (int i = 0; i < numeros.Length; i++)
        {
            if (numeros[i] == numero)
                return i;
        }
        return -1;
    }

    public static void Main()
    {
        int[] numeros = new int[] { 0, 2, 4, 6, 8 };

        WriteLine($"Digite o numero que deseja encontrar");
        var numero = int.Parse(ReadLine());
        var idxEncontrado = encontrarNumero(numeros, numero);
        if (idxEncontrado >= 0)
        {
            WriteLine($"O numero encontrado esta na posicao {idxEncontrado}");
        }
        else
        {
            WriteLine($"O numero digitado não foi encontrado");
        }
    }
};