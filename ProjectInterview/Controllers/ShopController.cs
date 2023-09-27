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
    [Route("/api/shop")]
    public class ShopController : BaseController<Shop>
    {
        public ShopController(ProjectInterviewDbContext context) : base(context)
        {

        }
        [HttpGet]
        [Route("")]
        public override async Task<BaseResponse<Shop>> GetAllAsync()
        {
            return await base.GetAllAsync();
        }

        [HttpPost]
        [Route("")]
        public override async Task<Shop> CreateAsync(Shop shop)
        {
            return await base.CreateAsync(shop);
        }
    }
}

