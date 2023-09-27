using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjectInterview.EntityFramworkCore;
using ProjectInterview.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInterview.Controllers
{
    [ApiController]
    [Route("/api/customer")]
    public class CustomerController : BaseController<Customer>
    {
        public CustomerController(ProjectInterviewDbContext context) : base(context)
        {

        }
        [HttpGet]
        [Route("")]
        public override async Task<BaseResponse<Customer>> GetAllAsync()
        {
            return await base.GetAllAsync();
        }

        [HttpPost]
        [Route("")]
        public override async Task<Customer> CreateAsync(Customer customer)
        {
            return await base.CreateAsync(customer);
        }
    }
}
