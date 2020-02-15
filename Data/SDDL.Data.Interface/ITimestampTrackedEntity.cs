using System;

namespace SDDL.Data.Interface {

	public interface ITimestampTrackedEntity {
		DateTime CreatedAt { get; set; }
		DateTime UpdatedAt { get; set; }
	}

}