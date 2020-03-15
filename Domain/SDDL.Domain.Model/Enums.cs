namespace SDDL.Domain.Model {
    public enum DownloadStatus {
        Idle = 0,
        Acknowledged = 1
    }

    public enum HookEventType {
        Undefined = 0,
        Start = 1,
        Retry = 2,
        Stop = 3,
        Abort = 4
    }
}