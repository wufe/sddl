using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using SDDL.Communication.GRPC.Configuration;
using SDDL.Database.EFCore.Configuration;

namespace SDDL.Infrastructure.Configuration {
    public class PersistenceAdapter : Profile {}

    public static class AutomapperConfigExtensions
    {
        public static void AddAutomapperConfigurations(this IServiceCollection services) {
            services
                .AddAutoMapper(cfg => {
                    cfg.AddProfile<PersistenceAdapter>();
                    cfg.AddProfile<DatabaseAutomapperProfile>();
                    cfg.AddProfile<GRPCAutomapperProfile>();
                }, typeof(AutomapperConfigExtensions));
        }
    }    
}