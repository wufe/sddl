using System;

namespace SDDL.Domain.Model
{
    public class DownloadModel
    {
        public int ID { get; set; }
        public Guid UUID { get; set; }
        public string URL { get; set; }
        public int Retries { get; set; }
        public DownloadStatus Status { get; set; }
    }
}
