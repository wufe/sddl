using System;

namespace SDDL.Data.Interface {
	public interface IUUIDTrackedEntity {
		Guid UUID { get; set; }
	}
}