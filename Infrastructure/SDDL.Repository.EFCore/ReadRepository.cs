using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using SDDL.Data.Interface;
using SDDL.Repository.Interface;

namespace SDDL.Repository.EFCore
{
	public class ReadRepository<T> : IReadRepository<T>
		where T : class, IPrimaryKeyEntity
	{
		protected readonly DbContext _context;

		public ReadRepository(DbContext context)
        {
            _context = context;
        }

		public IQueryable<T> AsNoTracking() =>
			_context
				.Set<T>()
				.AsNoTracking();

		public T Find(int ID) =>
            _context
				.Set<T>()
				.FirstOrDefault(x => x.ID == ID);

		public IQueryable<T> FindAll(Expression<Func<T, bool>> selector) =>
			_context
				.Set<T>()
				.Where(selector);

		public IQueryable<T> FindAll() =>
            _context
                .Set<T>();
	}
}
