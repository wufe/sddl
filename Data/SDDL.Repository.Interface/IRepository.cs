using SDDL.Data.Interface;

namespace SDDL.Repository.Interface {
    public interface IRepository<T> : IReadRepository<T>
        where T: IPrimaryKeyEntity
    {
        void Insert(T entity);
        void Update(T entity);
        void SaveChanges();
    }
}