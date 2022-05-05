// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package docker

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## Import
//
// ### Example Assuming you created a `config` as follows #!/bin/bash printf '{"a":"b"}' | docker config create foo - # prints the id
//
// 08c26c477474478d971139f750984775a7f019dbe8a2e7f09d66a187c009e66d you provide the definition for the resource as follows terraform resource "docker_config" "foo" {
//
//  name = "foo"
//
//  data = base64encode("{\"a\"\"b\"}") } then the import command is as follows #!/bin/bash
//
// ```sh
//  $ pulumi import docker:index/serviceConfig:ServiceConfig foo 08c26c477474478d971139f750984775a7f019dbe8a2e7f09d66a187c009e66d
// ```
type ServiceConfig struct {
	pulumi.CustomResourceState

	// Base64-url-safe-encoded config data
	Data pulumi.StringOutput `pulumi:"data"`
	// User-defined name of the config
	Name pulumi.StringOutput `pulumi:"name"`
}

// NewServiceConfig registers a new resource with the given unique name, arguments, and options.
func NewServiceConfig(ctx *pulumi.Context,
	name string, args *ServiceConfigArgs, opts ...pulumi.ResourceOption) (*ServiceConfig, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Data == nil {
		return nil, errors.New("invalid value for required argument 'Data'")
	}
	var resource ServiceConfig
	err := ctx.RegisterResource("docker:index/serviceConfig:ServiceConfig", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServiceConfig gets an existing ServiceConfig resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServiceConfig(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServiceConfigState, opts ...pulumi.ResourceOption) (*ServiceConfig, error) {
	var resource ServiceConfig
	err := ctx.ReadResource("docker:index/serviceConfig:ServiceConfig", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServiceConfig resources.
type serviceConfigState struct {
	// Base64-url-safe-encoded config data
	Data *string `pulumi:"data"`
	// User-defined name of the config
	Name *string `pulumi:"name"`
}

type ServiceConfigState struct {
	// Base64-url-safe-encoded config data
	Data pulumi.StringPtrInput
	// User-defined name of the config
	Name pulumi.StringPtrInput
}

func (ServiceConfigState) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceConfigState)(nil)).Elem()
}

type serviceConfigArgs struct {
	// Base64-url-safe-encoded config data
	Data string `pulumi:"data"`
	// User-defined name of the config
	Name *string `pulumi:"name"`
}

// The set of arguments for constructing a ServiceConfig resource.
type ServiceConfigArgs struct {
	// Base64-url-safe-encoded config data
	Data pulumi.StringInput
	// User-defined name of the config
	Name pulumi.StringPtrInput
}

func (ServiceConfigArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceConfigArgs)(nil)).Elem()
}

type ServiceConfigInput interface {
	pulumi.Input

	ToServiceConfigOutput() ServiceConfigOutput
	ToServiceConfigOutputWithContext(ctx context.Context) ServiceConfigOutput
}

func (*ServiceConfig) ElementType() reflect.Type {
	return reflect.TypeOf((**ServiceConfig)(nil)).Elem()
}

func (i *ServiceConfig) ToServiceConfigOutput() ServiceConfigOutput {
	return i.ToServiceConfigOutputWithContext(context.Background())
}

func (i *ServiceConfig) ToServiceConfigOutputWithContext(ctx context.Context) ServiceConfigOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServiceConfigOutput)
}

// ServiceConfigArrayInput is an input type that accepts ServiceConfigArray and ServiceConfigArrayOutput values.
// You can construct a concrete instance of `ServiceConfigArrayInput` via:
//
//          ServiceConfigArray{ ServiceConfigArgs{...} }
type ServiceConfigArrayInput interface {
	pulumi.Input

	ToServiceConfigArrayOutput() ServiceConfigArrayOutput
	ToServiceConfigArrayOutputWithContext(context.Context) ServiceConfigArrayOutput
}

type ServiceConfigArray []ServiceConfigInput

func (ServiceConfigArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ServiceConfig)(nil)).Elem()
}

func (i ServiceConfigArray) ToServiceConfigArrayOutput() ServiceConfigArrayOutput {
	return i.ToServiceConfigArrayOutputWithContext(context.Background())
}

func (i ServiceConfigArray) ToServiceConfigArrayOutputWithContext(ctx context.Context) ServiceConfigArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServiceConfigArrayOutput)
}

// ServiceConfigMapInput is an input type that accepts ServiceConfigMap and ServiceConfigMapOutput values.
// You can construct a concrete instance of `ServiceConfigMapInput` via:
//
//          ServiceConfigMap{ "key": ServiceConfigArgs{...} }
type ServiceConfigMapInput interface {
	pulumi.Input

	ToServiceConfigMapOutput() ServiceConfigMapOutput
	ToServiceConfigMapOutputWithContext(context.Context) ServiceConfigMapOutput
}

type ServiceConfigMap map[string]ServiceConfigInput

func (ServiceConfigMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ServiceConfig)(nil)).Elem()
}

func (i ServiceConfigMap) ToServiceConfigMapOutput() ServiceConfigMapOutput {
	return i.ToServiceConfigMapOutputWithContext(context.Background())
}

func (i ServiceConfigMap) ToServiceConfigMapOutputWithContext(ctx context.Context) ServiceConfigMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServiceConfigMapOutput)
}

type ServiceConfigOutput struct{ *pulumi.OutputState }

func (ServiceConfigOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ServiceConfig)(nil)).Elem()
}

func (o ServiceConfigOutput) ToServiceConfigOutput() ServiceConfigOutput {
	return o
}

func (o ServiceConfigOutput) ToServiceConfigOutputWithContext(ctx context.Context) ServiceConfigOutput {
	return o
}

// Base64-url-safe-encoded config data
func (o ServiceConfigOutput) Data() pulumi.StringOutput {
	return o.ApplyT(func(v *ServiceConfig) pulumi.StringOutput { return v.Data }).(pulumi.StringOutput)
}

// User-defined name of the config
func (o ServiceConfigOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *ServiceConfig) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

type ServiceConfigArrayOutput struct{ *pulumi.OutputState }

func (ServiceConfigArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ServiceConfig)(nil)).Elem()
}

func (o ServiceConfigArrayOutput) ToServiceConfigArrayOutput() ServiceConfigArrayOutput {
	return o
}

func (o ServiceConfigArrayOutput) ToServiceConfigArrayOutputWithContext(ctx context.Context) ServiceConfigArrayOutput {
	return o
}

func (o ServiceConfigArrayOutput) Index(i pulumi.IntInput) ServiceConfigOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *ServiceConfig {
		return vs[0].([]*ServiceConfig)[vs[1].(int)]
	}).(ServiceConfigOutput)
}

type ServiceConfigMapOutput struct{ *pulumi.OutputState }

func (ServiceConfigMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ServiceConfig)(nil)).Elem()
}

func (o ServiceConfigMapOutput) ToServiceConfigMapOutput() ServiceConfigMapOutput {
	return o
}

func (o ServiceConfigMapOutput) ToServiceConfigMapOutputWithContext(ctx context.Context) ServiceConfigMapOutput {
	return o
}

func (o ServiceConfigMapOutput) MapIndex(k pulumi.StringInput) ServiceConfigOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *ServiceConfig {
		return vs[0].(map[string]*ServiceConfig)[vs[1].(string)]
	}).(ServiceConfigOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ServiceConfigInput)(nil)).Elem(), &ServiceConfig{})
	pulumi.RegisterInputType(reflect.TypeOf((*ServiceConfigArrayInput)(nil)).Elem(), ServiceConfigArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*ServiceConfigMapInput)(nil)).Elem(), ServiceConfigMap{})
	pulumi.RegisterOutputType(ServiceConfigOutput{})
	pulumi.RegisterOutputType(ServiceConfigArrayOutput{})
	pulumi.RegisterOutputType(ServiceConfigMapOutput{})
}
