using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInterview.Model
{
    public class BaseResponse<T>
    {
        public int TotalRecords { get; set; }
        public List<T> Items { get; set; }
    }
}
