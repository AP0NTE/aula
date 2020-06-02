using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class PersonasContext : DbContext
    {
        public PersonasContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Apoyo> Apoyos { get; set; }
        
    }
}