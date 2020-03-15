using Microsoft.Extensions.DependencyInjection;
using SDDL.Domain.Service.Interface;

namespace SDDL.Communication.GRPC.Configuration {
    public static class GRPCDependencyInjectionExtensions {
        public static void AddGRPCServices(this IServiceCollection services) {
            services
                .AddScoped<IEnqueueService, EnqueueService>();
            services
                .AddScoped<EnqueueService>();
        }
    }
}