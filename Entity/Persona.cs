using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Persona
    {
        [Key]
        public string IdentificacionP { get; set; }
        public string NombresP { get; set; }
        public string ApellidosP { get; set; }
        public string SexoP { get; set; }
        public int EdadP { get; set; }
        public string DepartamentoP { get; set; }
        public string CiudadP { get; set; }
        public int ValorAcumuladoApoyo { get; set; }

    }
}