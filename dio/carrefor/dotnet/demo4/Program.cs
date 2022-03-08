// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");


using static System.Console;

public class Program
{
    static void MudarParaImpares(int[] impares)
    {
        for (int i = 0; i < impares.Length; i++)
        {
            impares[i] += 1;
        }
    }

    public static void Main()
    {
        var pares = new int[] { 0, 2, 4, 6, 8 };
        MudarParaImpares(pares);

        WriteLine($"Os impares {string.Join(", ", pares)} ;");

    }
};