using AutoMapper;

namespace SDDL.Communication.GRPC.Configuration {
    public class GRPCAutomapperProfile : Profile {
        public GRPCAutomapperProfile()
        {
            CreateMap<DownloadOutputEntityModel, Domain.Model.DownloadModel>()
                .ForMember(d => d.ID, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.UUID, opt => opt.MapFrom(s => s.Uuid))
                .ForMember(d => d.URL, opt => opt.MapFrom(s => s.Url));
            
            CreateMap<DownloadHookEvent, Domain.Model.ValueObjects.DownloadHookEvent>();
        }
    }
}