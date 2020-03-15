namespace SDDL.Domain.Model.ValueObjects {
    public class DownloadHookEvent {
        public HookEventType Type { get; set; }
        public DownloadModel Download { get; set; }
    }
}