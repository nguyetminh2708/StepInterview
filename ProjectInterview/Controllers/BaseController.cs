using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectInterview.EntityFramworkCore;
using ProjectInterview.Model;

namespace ProjectInterview.Controllers
{
    [ApiController]
    public class BaseController<TEntity> : ControllerBase where TEntity : class
    {
        protected readonly ProjectInterviewDbContext _context;
        protected DbSet<TEntity> _dbSet { get; set; }
        public BaseController(ProjectInterviewDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        [HttpGet]
        public virtual async Task<BaseResponse<TEntity>> GetAllAsync()
        {
            var pagedData = await _dbSet.ToListAsync();
            var totalRecords = await _dbSet.CountAsync();
            var response = new BaseResponse<TEntity> { TotalRecords = totalRecords, Items = pagedData };
            return response;
        }

        [HttpPost]
        public virtual async Task<TEntity> CreateAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}