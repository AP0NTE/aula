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
    public class ApoyoController: ControllerBase
    {
         private readonly ApoyoService _apoyoService;
        public ApoyoController(PersonasContext context)
        {
           _apoyoService = new ApoyoService(context);
        }

        // GET: api/Apoyo
        [HttpGet]
        public IEnumerable<ApoyoViewModel> Gets()
        {
            var apoyos = _apoyoService.ConsultarTodos().Select(p=> new ApoyoViewModel(p));
            return apoyos;
        }
        
        // POST: api/Apoyo
        [HttpPost]
        public ActionResult<ApoyoViewModel> Post(ApoyoInputModel apoyoInput)
        {
            Apoyo apoyo = MapearApoyo(apoyoInput);
            var response = _apoyoService.Guardar(apoyo);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Apoyo);
        }
      
        private Apoyo MapearApoyo(ApoyoInputModel apoyoInput)
        {
            var apoyo = new Apoyo
            {
                Persona = apoyoInput.Persona,
                ModalidadApoyo = apoyoInput.ModalidadApoyo,
                ValorApoyo = apoyoInput.ValorApoyo,
                FechaEntrega = apoyoInput.FechaEntrega,

            };
            return apoyo;
        }
        
    }
}