// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker
{
    /// <summary>
    /// Pulls a Docker image to a given Docker host from a Docker Registry.
    /// 
    /// This resource will *not* pull new layers of the image automatically unless used in
    /// conjunction with [`docker.RegistryImage`](https://www.terraform.io/docs/providers/docker/d/registry_image.html)
    /// data source to update the `pull_triggers` field.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Docker = Pulumi.Docker;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         // Find the latest Ubuntu precise image.
    ///         var ubuntu = new Docker.RemoteImage("ubuntu", new Docker.RemoteImageArgs
    ///         {
    ///             Name = "ubuntu:precise",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// ### Dynamic image
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Docker = Pulumi.Docker;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var ubuntuRegistryImage = Output.Create(Docker.GetRegistryImage.InvokeAsync(new Docker.GetRegistryImageArgs
    ///         {
    ///             Name = "ubuntu:precise",
    ///         }));
    ///         var ubuntuRemoteImage = new Docker.RemoteImage("ubuntuRemoteImage", new Docker.RemoteImageArgs
    ///         {
    ///             Name = ubuntuRegistryImage.Apply(ubuntuRegistryImage =&gt; ubuntuRegistryImage.Name),
    ///             PullTriggers = 
    ///             {
    ///                 ubuntuRegistryImage.Apply(ubuntuRegistryImage =&gt; ubuntuRegistryImage.Sha256Digest),
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class RemoteImage : Pulumi.CustomResource
    {
        /// <summary>
        /// See Build below for details.
        /// </summary>
        [Output("build")]
        public Output<Outputs.RemoteImageBuild?> Build { get; private set; } = null!;

        /// <summary>
        /// Force remove the image when the resource is destroyed
        /// </summary>
        [Output("forceRemove")]
        public Output<bool?> ForceRemove { get; private set; } = null!;

        /// <summary>
        /// If true, then the Docker image won't be
        /// deleted on destroy operation. If this is false, it will delete the image from
        /// the docker local storage on destroy operation.
        /// </summary>
        [Output("keepLocally")]
        public Output<bool?> KeepLocally { get; private set; } = null!;

        [Output("latest")]
        public Output<string> Latest { get; private set; } = null!;

        /// <summary>
        /// The name of the Docker image, including any tags or SHA256 repo digests.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("output")]
        public Output<string> Output { get; private set; } = null!;

        /// <summary>
        /// **Deprecated**, use `pull_triggers` instead.
        /// </summary>
        [Output("pullTrigger")]
        public Output<string?> PullTrigger { get; private set; } = null!;

        /// <summary>
        /// List of values which cause an
        /// image pull when changed. This is used to store the image digest from the
        /// registry when using the `docker.RegistryImage` [data source](https://www.terraform.io/docs/providers/docker/d/registry_image.html)
        /// to trigger an image update.
        /// </summary>
        [Output("pullTriggers")]
        public Output<ImmutableArray<string>> PullTriggers { get; private set; } = null!;


        /// <summary>
        /// Create a RemoteImage resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RemoteImage(string name, RemoteImageArgs args, CustomResourceOptions? options = null)
            : base("docker:index/remoteImage:RemoteImage", name, args ?? new RemoteImageArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RemoteImage(string name, Input<string> id, RemoteImageState? state = null, CustomResourceOptions? options = null)
            : base("docker:index/remoteImage:RemoteImage", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RemoteImage resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RemoteImage Get(string name, Input<string> id, RemoteImageState? state = null, CustomResourceOptions? options = null)
        {
            return new RemoteImage(name, id, state, options);
        }
    }

    public sealed class RemoteImageArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// See Build below for details.
        /// </summary>
        [Input("build")]
        public Input<Inputs.RemoteImageBuildArgs>? Build { get; set; }

        /// <summary>
        /// Force remove the image when the resource is destroyed
        /// </summary>
        [Input("forceRemove")]
        public Input<bool>? ForceRemove { get; set; }

        /// <summary>
        /// If true, then the Docker image won't be
        /// deleted on destroy operation. If this is false, it will delete the image from
        /// the docker local storage on destroy operation.
        /// </summary>
        [Input("keepLocally")]
        public Input<bool>? KeepLocally { get; set; }

        /// <summary>
        /// The name of the Docker image, including any tags or SHA256 repo digests.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// **Deprecated**, use `pull_triggers` instead.
        /// </summary>
        [Input("pullTrigger")]
        public Input<string>? PullTrigger { get; set; }

        [Input("pullTriggers")]
        private InputList<string>? _pullTriggers;

        /// <summary>
        /// List of values which cause an
        /// image pull when changed. This is used to store the image digest from the
        /// registry when using the `docker.RegistryImage` [data source](https://www.terraform.io/docs/providers/docker/d/registry_image.html)
        /// to trigger an image update.
        /// </summary>
        public InputList<string> PullTriggers
        {
            get => _pullTriggers ?? (_pullTriggers = new InputList<string>());
            set => _pullTriggers = value;
        }

        public RemoteImageArgs()
        {
        }
    }

    public sealed class RemoteImageState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// See Build below for details.
        /// </summary>
        [Input("build")]
        public Input<Inputs.RemoteImageBuildGetArgs>? Build { get; set; }

        /// <summary>
        /// Force remove the image when the resource is destroyed
        /// </summary>
        [Input("forceRemove")]
        public Input<bool>? ForceRemove { get; set; }

        /// <summary>
        /// If true, then the Docker image won't be
        /// deleted on destroy operation. If this is false, it will delete the image from
        /// the docker local storage on destroy operation.
        /// </summary>
        [Input("keepLocally")]
        public Input<bool>? KeepLocally { get; set; }

        [Input("latest")]
        public Input<string>? Latest { get; set; }

        /// <summary>
        /// The name of the Docker image, including any tags or SHA256 repo digests.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("output")]
        public Input<string>? Output { get; set; }

        /// <summary>
        /// **Deprecated**, use `pull_triggers` instead.
        /// </summary>
        [Input("pullTrigger")]
        public Input<string>? PullTrigger { get; set; }

        [Input("pullTriggers")]
        private InputList<string>? _pullTriggers;

        /// <summary>
        /// List of values which cause an
        /// image pull when changed. This is used to store the image digest from the
        /// registry when using the `docker.RegistryImage` [data source](https://www.terraform.io/docs/providers/docker/d/registry_image.html)
        /// to trigger an image update.
        /// </summary>
        public InputList<string> PullTriggers
        {
            get => _pullTriggers ?? (_pullTriggers = new InputList<string>());
            set => _pullTriggers = value;
        }

        public RemoteImageState()
        {
        }
    }
}
