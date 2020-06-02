using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApoyoEmergenciaCovid19.Models
{
    public class ApoyoInputModel
    {
        public string Persona { get; set; }
        [Required(ErrorMessage = "La Modalidad es requerido")]
        public string ModalidadApoyo { get; set; }
        [Required(ErrorMessage = "El valor es requerido")]
        public int ValorApoyo { get; set; }
        [Required(ErrorMessage = "La Fecha es requerida")]
        public DateTime FechaEntrega { get; set; }

    }
    public class ApoyoViewModel : ApoyoInputModel
    {
        public ApoyoViewModel()
        {  
        }
        public ApoyoViewModel(Apoyo apoyo)
        {
            Persona = apoyo.Persona;
            ModalidadApoyo = apoyo.ModalidadApoyo;
            ValorApoyo = apoyo.ValorApoyo;
            FechaEntrega = apoyo.FechaEntrega;
        }
    }

}