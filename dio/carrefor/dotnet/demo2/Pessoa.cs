public class Pessoa
{
   public int Idade { get; set; } 
   public string Nome { get; set; }
   public string Document { get; set; }

   public Pessoa Clone(){
      return new Pessoa(){
         Idade = this.Idade,
         Nome = this.Nome,
         Document = this.Document
      };
   }
};

