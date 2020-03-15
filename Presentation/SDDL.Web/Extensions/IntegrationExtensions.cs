using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using SDDL.Web.Services;
using SDDL.Web.Services.Interface;

namespace SDDL.Web.Extensions {
    public static class IntegrationExtensions {
        public static void AddHttpUtils(this IServiceCollection services) {
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
		}

        public static void AddPresentationServices(this IServiceCollection services) {
            services
                .AddScoped<ISpaService, SpaService>();
        }

        public static void AddPresentationHostedServices(this IServiceCollection services) {
            services.AddHostedService<HookListenerService>();
        }
    }
}