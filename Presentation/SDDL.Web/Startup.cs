using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using SDDL.Web.Extensions;
using SDDL.Infrastructure.Configuration;

namespace SDDL.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private string _allowDomainCorsPolicy = "_allowDomainCorsPolicy";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddHttpUtils();
            services.AddDatabase(Configuration.GetSection("ConnectionString").Value);
            services.AddInfrastructure();
            services.AddAutomapperConfigurations();
            services.AddPresentationServices();
            services.AddCors(options => {
                options.AddPolicy(_allowDomainCorsPolicy, builder =>
                    builder.WithOrigins("http://localhost:8002", "https://sddl.bembi.dev")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();

            var cachePeriod = env.IsDevelopment() ? "0" : "604800";

            app.UseStaticFiles(new StaticFileOptions(){
                RequestPath = new PathString("/static"),
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, @"wwwroot/dist/static")),
                OnPrepareResponse = ctx => {
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
                }
            });

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(_allowDomainCorsPolicy);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
