using Microsoft.EntityFrameworkCore;

namespace ProjectInterview.EntityFramworkCore
{
    public class ProjectInterviewDbContext:DbContext
    {
        public ProjectInterviewDbContext(DbContextOptions<ProjectInterviewDbContext> options): base(options) {
        }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Shop> Shops { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);    
            modelBuilder.Entity<OrderHistory>().ToTable("OrderHistory").HasKey(x => new { x.CustomerId, x.ProductId });
        }
    }
}
