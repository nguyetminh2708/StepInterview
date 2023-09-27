using System;
using System.Collections.Generic;

namespace ProjectInterview.EntityFramworkCore
{
    public class Customer
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public virtual ICollection<OrderHistory> OrderHistorys { get; set; }
    }
}
