import GRPC from 'grpc';
import { EnqueueClient } from './proto/services/enqueue_grpc_pb';

(() => {
    const world = 'ZA WARUDO';
    console.log(`Hello ${world}`);

    const client = new EnqueueClient("sddl-core:8001", GRPC.credentials.createInsecure());
    
})();