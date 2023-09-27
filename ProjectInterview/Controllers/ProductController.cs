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
    [Route("api/product")]
    public class ProductController : BaseController<Product>
    {
        protected readonly ProjectInterviewDbContext _context;
        public ProductController(ProjectInterviewDbContext context) : base(context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("")]
        public override async Task<Product> CreateAsync(Product product)
        {
            return await base.CreateAsync(product);
        }

        [HttpPost]
        [Route("get-data")]
        public async Task<PaginationResponse<Product>> GetAll([FromBody] Pagination filter)
        {
            IQueryable<Product> query = _context.Products;

            if (!string.IsNullOrEmpty(filter.Search))
            {
                query = query.Where(e => e.Name.Contains(filter.Search));
            }
            var pagedData = await query
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToListAsync();
            var totalRecords = await _context.Products.CountAsync();
            var response = new PaginationResponse<Product> { PageNumber = filter.PageNumber, PageSize = filter.PageSize, TotalPages = (int)totalRecords / filter.PageSize, TotalRecords = totalRecords, Items = pagedData };
                
            return response;
        }
    }
}

