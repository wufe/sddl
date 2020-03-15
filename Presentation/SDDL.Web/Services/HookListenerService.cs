using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SDDL.Communication.GRPC;
using SDDL.Domain.Service.Interface;
using SDDL.Web.Services.Interface;

namespace SDDL.Web.Services {
    public class HookListenerService : IHookListenerService, IHostedService
    {
        private readonly ILogger<IHookListenerService> _logger;
        private readonly IServiceScopeFactory _serviceScopeFactory;
        private readonly IMapper _mapper;

        public HookListenerService(
            ILogger<IHookListenerService> logger,
            IMapper mapper,
            IServiceScopeFactory serviceScopeFactory)
        {
            _logger = logger;
            _serviceScopeFactory = serviceScopeFactory;
            _mapper = mapper;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("HookListenerService started");
            using (var scope = _serviceScopeFactory.CreateScope()) {
                var enqueueService = scope.ServiceProvider.GetRequiredService<EnqueueService>();

                #pragma warning disable 4014
                enqueueService.WithClient(async (client) => {
                    try {
                        var call = client.ListenDownloadHooks(new ListenHooksInputValueObject());
                        while (await call.ResponseStream.MoveNext(cancellationToken)) {
                            var downloadHookEvent = _mapper.Map<Domain.Model.ValueObjects.DownloadHookEvent>(call.ResponseStream.Current);
                            _logger.LogInformation($"{downloadHookEvent.Download.UUID.ToString()}");
                        }
                    } catch (Exception) {}   
                });
                #pragma warning restore 4014
                
            }
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}