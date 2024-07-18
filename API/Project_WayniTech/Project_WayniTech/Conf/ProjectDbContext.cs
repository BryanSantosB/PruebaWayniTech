using Microsoft.EntityFrameworkCore;
using Project_WayniTech.Models;

namespace Project_WayniTech.Conf
{
    public class ProjectDbContext : DbContext
    {
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options)
        {
            
        }

        public DbSet<Producto> Productos { get; set; }
    }
}
