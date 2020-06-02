using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ApoyoService
    {
        private readonly PersonasContext _context;
        public ApoyoService(PersonasContext context)
        {
           _context = context;
        }

        public GuardarApoyoResponse Guardar(Apoyo apoyo)
        {
            try
            {
                var ApoyoAux = _context.Apoyos.Find(apoyo.Persona);
                if (ApoyoAux != null)
                {
                    return new GuardarApoyoResponse($"Error de la Aplicacion: el veapoyonta ya se encuentra registrado!");
                } 

                _context.Apoyos.Add(apoyo);
                _context.SaveChanges();
                return new GuardarApoyoResponse(apoyo);
            }
            catch (Exception e)
            {
                return new GuardarApoyoResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Apoyo> ConsultarTodos()
        {
            
            List<Apoyo> apoyos = _context.Apoyos.ToList();
            return apoyos;
        }
        
    }

    public class GuardarApoyoResponse 
    {
        public GuardarApoyoResponse(Apoyo apoyo)
        {
            Error = false;
            Apoyo = apoyo;
        }
        public GuardarApoyoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Apoyo Apoyo { get; set; }
        
    }
}