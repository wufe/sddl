using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SDDL.Communication.GRPC.Configuration;
using SDDL.Database.EFCore;
using SDDL.Repository.EFCore.Configuration;

namespace SDDL.Web.Integration
{
    public static class DependencyInjectionExtensions
    {

        public static void AddDatabase(this IServiceCollection services, string connectionString) {
            services
                .AddDbContext<DbContext, SDDLContext>(options =>
                    options
                        .UseSqlite(connectionString));
        }

        public static void AddInfrastructure(this IServiceCollection services) {
            services.AddRepositories();
            services.AddGRPCServices();
        }

    }
}
