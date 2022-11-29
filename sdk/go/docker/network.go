// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package docker

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// <!-- Bug: Type and Name are switched -->
// `Network` provides a docker network resource.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/pulumi/pulumi-docker/sdk/v4/go/docker"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			_, err := docker.NewNetwork(ctx, "privateNetwork", nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
//
// ## Import
//
// ### Example Assuming you created a `network` as follows #!/bin/bash docker network create foo prints the long ID 87b57a9b91ecab2db2a6dbf38df74c67d7c7108cbe479d6576574ec2cd8c2d73 you provide the definition for the resource as follows terraform resource "docker_network" "foo" {
//
//	name = "foo" } then the import command is as follows #!/bin/bash
//
// ```sh
//
//	$ pulumi import docker:index/network:Network foo 87b57a9b91ecab2db2a6dbf38df74c67d7c7108cbe479d6576574ec2cd8c2d73
//
// ```
type Network struct {
	pulumi.CustomResourceState

	// Enable manual container attachment to the network.
	Attachable pulumi.BoolPtrOutput `pulumi:"attachable"`
	// Requests daemon to check for networks with same name.
	CheckDuplicate pulumi.BoolPtrOutput `pulumi:"checkDuplicate"`
	// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
	Driver pulumi.StringOutput `pulumi:"driver"`
	// Create swarm routing-mesh network. Defaults to `false`.
	Ingress pulumi.BoolPtrOutput `pulumi:"ingress"`
	// Whether the network is internal.
	Internal pulumi.BoolOutput `pulumi:"internal"`
	// The IPAM configuration options
	IpamConfigs NetworkIpamConfigArrayOutput `pulumi:"ipamConfigs"`
	// Driver used by the custom IP scheme of the network. Defaults to `default`
	IpamDriver pulumi.StringPtrOutput `pulumi:"ipamDriver"`
	// Enable IPv6 networking. Defaults to `false`.
	Ipv6 pulumi.BoolPtrOutput `pulumi:"ipv6"`
	// User-defined key/value metadata
	Labels NetworkLabelArrayOutput `pulumi:"labels"`
	// The name of the Docker network.
	Name pulumi.StringOutput `pulumi:"name"`
	// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
	Options pulumi.MapOutput `pulumi:"options"`
	// Scope of the network. One of `swarm`, `global`, or `local`.
	Scope pulumi.StringOutput `pulumi:"scope"`
}

// NewNetwork registers a new resource with the given unique name, arguments, and options.
func NewNetwork(ctx *pulumi.Context,
	name string, args *NetworkArgs, opts ...pulumi.ResourceOption) (*Network, error) {
	if args == nil {
		args = &NetworkArgs{}
	}

	var resource Network
	err := ctx.RegisterResource("docker:index/network:Network", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNetwork gets an existing Network resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetwork(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NetworkState, opts ...pulumi.ResourceOption) (*Network, error) {
	var resource Network
	err := ctx.ReadResource("docker:index/network:Network", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Network resources.
type networkState struct {
	// Enable manual container attachment to the network.
	Attachable *bool `pulumi:"attachable"`
	// Requests daemon to check for networks with same name.
	CheckDuplicate *bool `pulumi:"checkDuplicate"`
	// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
	Driver *string `pulumi:"driver"`
	// Create swarm routing-mesh network. Defaults to `false`.
	Ingress *bool `pulumi:"ingress"`
	// Whether the network is internal.
	Internal *bool `pulumi:"internal"`
	// The IPAM configuration options
	IpamConfigs []NetworkIpamConfig `pulumi:"ipamConfigs"`
	// Driver used by the custom IP scheme of the network. Defaults to `default`
	IpamDriver *string `pulumi:"ipamDriver"`
	// Enable IPv6 networking. Defaults to `false`.
	Ipv6 *bool `pulumi:"ipv6"`
	// User-defined key/value metadata
	Labels []NetworkLabel `pulumi:"labels"`
	// The name of the Docker network.
	Name *string `pulumi:"name"`
	// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
	Options map[string]interface{} `pulumi:"options"`
	// Scope of the network. One of `swarm`, `global`, or `local`.
	Scope *string `pulumi:"scope"`
}

type NetworkState struct {
	// Enable manual container attachment to the network.
	Attachable pulumi.BoolPtrInput
	// Requests daemon to check for networks with same name.
	CheckDuplicate pulumi.BoolPtrInput
	// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
	Driver pulumi.StringPtrInput
	// Create swarm routing-mesh network. Defaults to `false`.
	Ingress pulumi.BoolPtrInput
	// Whether the network is internal.
	Internal pulumi.BoolPtrInput
	// The IPAM configuration options
	IpamConfigs NetworkIpamConfigArrayInput
	// Driver used by the custom IP scheme of the network. Defaults to `default`
	IpamDriver pulumi.StringPtrInput
	// Enable IPv6 networking. Defaults to `false`.
	Ipv6 pulumi.BoolPtrInput
	// User-defined key/value metadata
	Labels NetworkLabelArrayInput
	// The name of the Docker network.
	Name pulumi.StringPtrInput
	// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
	Options pulumi.MapInput
	// Scope of the network. One of `swarm`, `global`, or `local`.
	Scope pulumi.StringPtrInput
}

func (NetworkState) ElementType() reflect.Type {
	return reflect.TypeOf((*networkState)(nil)).Elem()
}

type networkArgs struct {
	// Enable manual container attachment to the network.
	Attachable *bool `pulumi:"attachable"`
	// Requests daemon to check for networks with same name.
	CheckDuplicate *bool `pulumi:"checkDuplicate"`
	// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
	Driver *string `pulumi:"driver"`
	// Create swarm routing-mesh network. Defaults to `false`.
	Ingress *bool `pulumi:"ingress"`
	// Whether the network is internal.
	Internal *bool `pulumi:"internal"`
	// The IPAM configuration options
	IpamConfigs []NetworkIpamConfig `pulumi:"ipamConfigs"`
	// Driver used by the custom IP scheme of the network. Defaults to `default`
	IpamDriver *string `pulumi:"ipamDriver"`
	// Enable IPv6 networking. Defaults to `false`.
	Ipv6 *bool `pulumi:"ipv6"`
	// User-defined key/value metadata
	Labels []NetworkLabel `pulumi:"labels"`
	// The name of the Docker network.
	Name *string `pulumi:"name"`
	// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
	Options map[string]interface{} `pulumi:"options"`
}

// The set of arguments for constructing a Network resource.
type NetworkArgs struct {
	// Enable manual container attachment to the network.
	Attachable pulumi.BoolPtrInput
	// Requests daemon to check for networks with same name.
	CheckDuplicate pulumi.BoolPtrInput
	// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
	Driver pulumi.StringPtrInput
	// Create swarm routing-mesh network. Defaults to `false`.
	Ingress pulumi.BoolPtrInput
	// Whether the network is internal.
	Internal pulumi.BoolPtrInput
	// The IPAM configuration options
	IpamConfigs NetworkIpamConfigArrayInput
	// Driver used by the custom IP scheme of the network. Defaults to `default`
	IpamDriver pulumi.StringPtrInput
	// Enable IPv6 networking. Defaults to `false`.
	Ipv6 pulumi.BoolPtrInput
	// User-defined key/value metadata
	Labels NetworkLabelArrayInput
	// The name of the Docker network.
	Name pulumi.StringPtrInput
	// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
	Options pulumi.MapInput
}

func (NetworkArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*networkArgs)(nil)).Elem()
}

type NetworkInput interface {
	pulumi.Input

	ToNetworkOutput() NetworkOutput
	ToNetworkOutputWithContext(ctx context.Context) NetworkOutput
}

func (*Network) ElementType() reflect.Type {
	return reflect.TypeOf((**Network)(nil)).Elem()
}

func (i *Network) ToNetworkOutput() NetworkOutput {
	return i.ToNetworkOutputWithContext(context.Background())
}

func (i *Network) ToNetworkOutputWithContext(ctx context.Context) NetworkOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NetworkOutput)
}

// NetworkArrayInput is an input type that accepts NetworkArray and NetworkArrayOutput values.
// You can construct a concrete instance of `NetworkArrayInput` via:
//
//	NetworkArray{ NetworkArgs{...} }
type NetworkArrayInput interface {
	pulumi.Input

	ToNetworkArrayOutput() NetworkArrayOutput
	ToNetworkArrayOutputWithContext(context.Context) NetworkArrayOutput
}

type NetworkArray []NetworkInput

func (NetworkArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Network)(nil)).Elem()
}

func (i NetworkArray) ToNetworkArrayOutput() NetworkArrayOutput {
	return i.ToNetworkArrayOutputWithContext(context.Background())
}

func (i NetworkArray) ToNetworkArrayOutputWithContext(ctx context.Context) NetworkArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NetworkArrayOutput)
}

// NetworkMapInput is an input type that accepts NetworkMap and NetworkMapOutput values.
// You can construct a concrete instance of `NetworkMapInput` via:
//
//	NetworkMap{ "key": NetworkArgs{...} }
type NetworkMapInput interface {
	pulumi.Input

	ToNetworkMapOutput() NetworkMapOutput
	ToNetworkMapOutputWithContext(context.Context) NetworkMapOutput
}

type NetworkMap map[string]NetworkInput

func (NetworkMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Network)(nil)).Elem()
}

func (i NetworkMap) ToNetworkMapOutput() NetworkMapOutput {
	return i.ToNetworkMapOutputWithContext(context.Background())
}

func (i NetworkMap) ToNetworkMapOutputWithContext(ctx context.Context) NetworkMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NetworkMapOutput)
}

type NetworkOutput struct{ *pulumi.OutputState }

func (NetworkOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Network)(nil)).Elem()
}

func (o NetworkOutput) ToNetworkOutput() NetworkOutput {
	return o
}

func (o NetworkOutput) ToNetworkOutputWithContext(ctx context.Context) NetworkOutput {
	return o
}

// Enable manual container attachment to the network.
func (o NetworkOutput) Attachable() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Network) pulumi.BoolPtrOutput { return v.Attachable }).(pulumi.BoolPtrOutput)
}

// Requests daemon to check for networks with same name.
func (o NetworkOutput) CheckDuplicate() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Network) pulumi.BoolPtrOutput { return v.CheckDuplicate }).(pulumi.BoolPtrOutput)
}

// The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
func (o NetworkOutput) Driver() pulumi.StringOutput {
	return o.ApplyT(func(v *Network) pulumi.StringOutput { return v.Driver }).(pulumi.StringOutput)
}

// Create swarm routing-mesh network. Defaults to `false`.
func (o NetworkOutput) Ingress() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Network) pulumi.BoolPtrOutput { return v.Ingress }).(pulumi.BoolPtrOutput)
}

// Whether the network is internal.
func (o NetworkOutput) Internal() pulumi.BoolOutput {
	return o.ApplyT(func(v *Network) pulumi.BoolOutput { return v.Internal }).(pulumi.BoolOutput)
}

// The IPAM configuration options
func (o NetworkOutput) IpamConfigs() NetworkIpamConfigArrayOutput {
	return o.ApplyT(func(v *Network) NetworkIpamConfigArrayOutput { return v.IpamConfigs }).(NetworkIpamConfigArrayOutput)
}

// Driver used by the custom IP scheme of the network. Defaults to `default`
func (o NetworkOutput) IpamDriver() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Network) pulumi.StringPtrOutput { return v.IpamDriver }).(pulumi.StringPtrOutput)
}

// Enable IPv6 networking. Defaults to `false`.
func (o NetworkOutput) Ipv6() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Network) pulumi.BoolPtrOutput { return v.Ipv6 }).(pulumi.BoolPtrOutput)
}

// User-defined key/value metadata
func (o NetworkOutput) Labels() NetworkLabelArrayOutput {
	return o.ApplyT(func(v *Network) NetworkLabelArrayOutput { return v.Labels }).(NetworkLabelArrayOutput)
}

// The name of the Docker network.
func (o NetworkOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *Network) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
func (o NetworkOutput) Options() pulumi.MapOutput {
	return o.ApplyT(func(v *Network) pulumi.MapOutput { return v.Options }).(pulumi.MapOutput)
}

// Scope of the network. One of `swarm`, `global`, or `local`.
func (o NetworkOutput) Scope() pulumi.StringOutput {
	return o.ApplyT(func(v *Network) pulumi.StringOutput { return v.Scope }).(pulumi.StringOutput)
}

type NetworkArrayOutput struct{ *pulumi.OutputState }

func (NetworkArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Network)(nil)).Elem()
}

func (o NetworkArrayOutput) ToNetworkArrayOutput() NetworkArrayOutput {
	return o
}

func (o NetworkArrayOutput) ToNetworkArrayOutputWithContext(ctx context.Context) NetworkArrayOutput {
	return o
}

func (o NetworkArrayOutput) Index(i pulumi.IntInput) NetworkOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Network {
		return vs[0].([]*Network)[vs[1].(int)]
	}).(NetworkOutput)
}

type NetworkMapOutput struct{ *pulumi.OutputState }

func (NetworkMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Network)(nil)).Elem()
}

func (o NetworkMapOutput) ToNetworkMapOutput() NetworkMapOutput {
	return o
}

func (o NetworkMapOutput) ToNetworkMapOutputWithContext(ctx context.Context) NetworkMapOutput {
	return o
}

func (o NetworkMapOutput) MapIndex(k pulumi.StringInput) NetworkOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Network {
		return vs[0].(map[string]*Network)[vs[1].(string)]
	}).(NetworkOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*NetworkInput)(nil)).Elem(), &Network{})
	pulumi.RegisterInputType(reflect.TypeOf((*NetworkArrayInput)(nil)).Elem(), NetworkArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*NetworkMapInput)(nil)).Elem(), NetworkMap{})
	pulumi.RegisterOutputType(NetworkOutput{})
	pulumi.RegisterOutputType(NetworkArrayOutput{})
	pulumi.RegisterOutputType(NetworkMapOutput{})
}
