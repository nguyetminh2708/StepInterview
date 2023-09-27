using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectInterview.EntityFramworkCore
{
    public class Product
    {
        public int Id { get; set; }
        public virtual Shop Shop { get; set; }
        [ForeignKey(nameof(Shop))]
        public int? ShopId { get; set; }
        [MaxLength(200)]
        [Required]
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public float Price { get; set; }
    }
}
