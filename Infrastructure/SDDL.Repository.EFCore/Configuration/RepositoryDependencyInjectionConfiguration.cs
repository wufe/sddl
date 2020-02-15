using Microsoft.Extensions.DependencyInjection;
using SDDL.Repository.Interface;

namespace SDDL.Repository.EFCore.Configuration {
    public static class RepositoryDependencyInjectionConfigurationExtensions {
        public static void AddRepositories(this IServiceCollection services) {
            services
				.AddScoped(typeof(IReadRepository<>), typeof(ReadRepository<>));
			services
				.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        }
    }
}