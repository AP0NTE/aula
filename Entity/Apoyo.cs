using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Apoyo
    {
        [Key]
        public int Id { get; set; }      
        public string Persona { get; set; }       
        public string ModalidadApoyo { get; set; }      
        public int ValorApoyo { get; set; }
        public DateTime FechaEntrega { get; set; }

    }
}