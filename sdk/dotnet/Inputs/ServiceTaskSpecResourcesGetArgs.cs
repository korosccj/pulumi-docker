// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ServiceTaskSpecResourcesGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("limits")]
        public Input<Inputs.ServiceTaskSpecResourcesLimitsGetArgs>? Limits { get; set; }

        [Input("reservation")]
        public Input<Inputs.ServiceTaskSpecResourcesReservationGetArgs>? Reservation { get; set; }

        public ServiceTaskSpecResourcesGetArgs()
        {
        }
        public static new ServiceTaskSpecResourcesGetArgs Empty => new ServiceTaskSpecResourcesGetArgs();
    }
}
