using System;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using SDDL.Domain.Service.Interface;
using static SDDL.Communication.GRPC.Enqueue;

namespace SDDL.Communication.GRPC {
    public class EnqueueService : EnqueueBase, IEnqueueService {
        private EnqueueClient _client;
        private readonly ILogger<EnqueueService> _logger;
        private readonly Channel _channel;

        public EnqueueService(ILogger<EnqueueService> logger)
        {
            _logger = logger;
            _channel = new Channel("127.0.0.1:50052", ChannelCredentials.Insecure, new[] {
                new ChannelOption("grpc.keepalive_time_ms", 5 * 1000),
                new ChannelOption("grpc.keepalive_permit_without_calls", 1)
            });
        }

        public async Task WithClient(Func<EnqueueClient, Task> clientAction, CancellationToken cancellationToken = new CancellationToken(), Action onDisconnect = null, Action onConnect = null) {
            while (!cancellationToken.IsCancellationRequested) {
                _logger.LogDebug("Trying connection..");
                await WaitForConnectionAndExecute(clientAction, onDisconnect, onConnect);
            }
        }

        private async Task WaitForConnectionAndExecute(Func<EnqueueClient, Task> clientAction, Action onDisconnect, Action onConnect) {
            await _channel.ConnectAsync();
            _client = new Enqueue.EnqueueClient(_channel);
            if (onConnect != null)
                onConnect();
            #pragma warning disable 4014
            clientAction(_client);
            #pragma warning restore 4014
            await _channel.WaitForStateChangedAsync(_channel.State);
        }
        public Enqueue.EnqueueClient Client => _client;
        public Channel Channel => _channel;
    }
}