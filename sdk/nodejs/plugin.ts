// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Manages the lifecycle of a Docker plugin.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 *
 * const sample_volume_plugin = new docker.Plugin("sample-volume-plugin", {});
 * ```
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 *
 * const sample_volume_plugin = new docker.Plugin("sample-volume-plugin", {
 *     alias: "sample-volume-plugin",
 *     enableTimeout: 60,
 *     enabled: false,
 *     envs: ["DEBUG=1"],
 *     forceDestroy: true,
 *     forceDisable: true,
 *     grantAllPermissions: true,
 * });
 * ```
 *
 * ## Import
 *
 * Docker plugins can be imported using the long id, e.g. for a plugin `tiborvass/sample-volume-plugin:latest`
 *
 * ```sh
 *  $ pulumi import docker:index/plugin:Plugin sample-volume-plugin $(docker plugin inspect -f "{{.ID}}" tiborvass/sample-volume-plugin:latest)
 * ```
 */
export class Plugin extends pulumi.CustomResource {
    /**
     * Get an existing Plugin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PluginState, opts?: pulumi.CustomResourceOptions): Plugin {
        return new Plugin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'docker:index/plugin:Plugin';

    /**
     * Returns true if the given object is an instance of Plugin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Plugin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Plugin.__pulumiType;
    }

    /**
     * The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * HTTP client timeout to enable the plugin.
     */
    public readonly enableTimeout!: pulumi.Output<number | undefined>;
    /**
     * If true, the plugin is enabled. The default value is `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * . The environment variables.
     */
    public readonly envs!: pulumi.Output<string[]>;
    /**
     * If true, the plugin is removed forcibly when the plugin is removed.
     */
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * If true, then the plugin is disabled forcibly when the plugin is disabled.
     */
    public readonly forceDisable!: pulumi.Output<boolean | undefined>;
    /**
     * If true, grant all permissions necessary to run the plugin. This attribute conflicts with `grantPermissions`.
     */
    public readonly grantAllPermissions!: pulumi.Output<boolean | undefined>;
    /**
     * grant permissions necessary to run the plugin. This attribute conflicts with `grantAllPermissions`. See grantPermissions below for details.
     */
    public readonly grantPermissions!: pulumi.Output<outputs.PluginGrantPermission[] | undefined>;
    /**
     * Docker Plugin name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * (string) The plugin reference.
     */
    public /*out*/ readonly pluginReference!: pulumi.Output<string>;

    /**
     * Create a Plugin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PluginArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PluginArgs | PluginState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PluginState | undefined;
            inputs["alias"] = state ? state.alias : undefined;
            inputs["enableTimeout"] = state ? state.enableTimeout : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["envs"] = state ? state.envs : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["forceDisable"] = state ? state.forceDisable : undefined;
            inputs["grantAllPermissions"] = state ? state.grantAllPermissions : undefined;
            inputs["grantPermissions"] = state ? state.grantPermissions : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pluginReference"] = state ? state.pluginReference : undefined;
        } else {
            const args = argsOrState as PluginArgs | undefined;
            inputs["alias"] = args ? args.alias : undefined;
            inputs["enableTimeout"] = args ? args.enableTimeout : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["envs"] = args ? args.envs : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["forceDisable"] = args ? args.forceDisable : undefined;
            inputs["grantAllPermissions"] = args ? args.grantAllPermissions : undefined;
            inputs["grantPermissions"] = args ? args.grantPermissions : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pluginReference"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Plugin.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Plugin resources.
 */
export interface PluginState {
    /**
     * The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * HTTP client timeout to enable the plugin.
     */
    readonly enableTimeout?: pulumi.Input<number>;
    /**
     * If true, the plugin is enabled. The default value is `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * . The environment variables.
     */
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If true, the plugin is removed forcibly when the plugin is removed.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * If true, then the plugin is disabled forcibly when the plugin is disabled.
     */
    readonly forceDisable?: pulumi.Input<boolean>;
    /**
     * If true, grant all permissions necessary to run the plugin. This attribute conflicts with `grantPermissions`.
     */
    readonly grantAllPermissions?: pulumi.Input<boolean>;
    /**
     * grant permissions necessary to run the plugin. This attribute conflicts with `grantAllPermissions`. See grantPermissions below for details.
     */
    readonly grantPermissions?: pulumi.Input<pulumi.Input<inputs.PluginGrantPermission>[]>;
    /**
     * Docker Plugin name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * (string) The plugin reference.
     */
    readonly pluginReference?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Plugin resource.
 */
export interface PluginArgs {
    /**
     * The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * HTTP client timeout to enable the plugin.
     */
    readonly enableTimeout?: pulumi.Input<number>;
    /**
     * If true, the plugin is enabled. The default value is `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * . The environment variables.
     */
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If true, the plugin is removed forcibly when the plugin is removed.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * If true, then the plugin is disabled forcibly when the plugin is disabled.
     */
    readonly forceDisable?: pulumi.Input<boolean>;
    /**
     * If true, grant all permissions necessary to run the plugin. This attribute conflicts with `grantPermissions`.
     */
    readonly grantAllPermissions?: pulumi.Input<boolean>;
    /**
     * grant permissions necessary to run the plugin. This attribute conflicts with `grantAllPermissions`. See grantPermissions below for details.
     */
    readonly grantPermissions?: pulumi.Input<pulumi.Input<inputs.PluginGrantPermission>[]>;
    /**
     * Docker Plugin name
     */
    readonly name?: pulumi.Input<string>;
}
