using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInterview.EntityFramworkCore
{
    public class OrderHistory
    {

        [ForeignKey(nameof(CustomerId))]
        public Customer Customer { get; set; }
        public int CustomerId { get; set; }
        [ForeignKey(nameof(ProductId))]
        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}
