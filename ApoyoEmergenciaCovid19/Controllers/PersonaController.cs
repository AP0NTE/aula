using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ApoyoEmergenciaCovid19.Models;

namespace ApoyoEmergenciaCovid19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController: ControllerBase
    {
        private readonly PersonaService _personaService;
        public PersonaController(PersonasContext context)
        {
            _personaService = new PersonaService(context);
        }

        // GET: api/Persona
        [HttpGet]
        public IEnumerable<PersonaViewModel> Gets()
        {
            var personas = _personaService.ConsultarTodos().Select(p=> new PersonaViewModel(p));
            return personas;
        }

        // GET: api/Persona/5
        [HttpGet("{identificacionP}")]
        public ActionResult<PersonaViewModel> Get(string identificacionP)
        {
            var persona = _personaService.BuscarxIdentificacion(identificacionP);
            if (persona == null) return NotFound();
            var personaViewModel = new PersonaViewModel(persona);
            return personaViewModel;
        }
        
        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput)
        {
            Persona persona = MapearPersona(personaInput);
            var response = _personaService.Guardar(persona);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }
      
        // DELETE: api/Persona/5
        [HttpDelete("{identificacionP}")]
        public ActionResult<string> Delete(string identificacionP)
        {
            string mensaje = _personaService.Eliminar(identificacionP);
            return Ok(mensaje);
        }


        private Persona MapearPersona(PersonaInputModel personaInput)
        {
            var persona = new Persona
            {
                IdentificacionP = personaInput.IdentificacionP,
                NombresP = personaInput.NombresP,
                ApellidosP = personaInput.ApellidosP,
                SexoP = personaInput.SexoP,
                EdadP = personaInput.EdadP,
                DepartamentoP = personaInput.DepartamentoP,
                CiudadP = personaInput.CiudadP,
                ValorAcumuladoApoyo= personaInput.ValorAcumuladoApoyo
            };
            return persona;
        }

        // PUT: api/Persona/5
        [HttpPut("{identificacionP}")]
        public ActionResult<string> Put(string identificacionP, Persona persona)
        {
            throw new NotImplementedException();
        }

        
    }
}