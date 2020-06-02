using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApoyoEmergenciaCovid19.Models
{
    public class PersonaInputModel
    {
        [Required(ErrorMessage = "La Identificacion es requerida")]
        public string IdentificacionP { get; set; }
        [Required(ErrorMessage = "El Nombre es requerido")]
        public string NombresP { get; set; }
        [Required(ErrorMessage = "Los apellidos son requeridos")]
        public string ApellidosP { get; set; }
        [Required]
        [SexValidation(ErrorMessage = "Especifique un sexo [M ó F]")]
        public string SexoP { get; set; }
        [Required]
        [Range(1, 120, ErrorMessage = "La edad debe estar entre 1 y 120")]
        public int EdadP { get; set; }
        [Required(ErrorMessage = "El departamento es requerido")]
        public string DepartamentoP { get; set; }
        [Required(ErrorMessage = "La ciudad es requerida")]
        public string CiudadP { get; set; }
        public int ValorAcumuladoApoyo { get; set; }

    }

    public class PersonaViewModel : PersonaInputModel
    {
        public PersonaViewModel()
        {
        }
        public PersonaViewModel(Persona persona)
        {
            IdentificacionP = persona.IdentificacionP;
            NombresP = persona.NombresP;
            ApellidosP = persona.ApellidosP;
            SexoP = persona.SexoP;
            EdadP = persona.EdadP;
            DepartamentoP = persona.DepartamentoP;
            CiudadP = persona.CiudadP;
            ValorAcumuladoApoyo = persona.ValorAcumuladoApoyo;
        }
    }
    public class SexValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (Convert.ToString(value) == "M" || Convert.ToString(value) == "F")
                return ValidationResult.Success;
            else
                return new ValidationResult(ErrorMessage);
        }
    }

}