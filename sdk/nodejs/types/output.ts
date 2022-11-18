// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ContainerCapabilities {
    /**
     * List of linux capabilities to add.
     */
    adds?: string[];
    /**
     * List of linux capabilities to drop.
     */
    drops?: string[];
}

export interface ContainerDevice {
    /**
     * The path in the container where the device will be bound.
     */
    containerPath?: string;
    /**
     * The path on the host where the device is located.
     */
    hostPath: string;
    /**
     * The cgroup permissions given to the container to access the device. Defaults to `rwm`.
     */
    permissions?: string;
}

export interface ContainerHealthcheck {
    /**
     * Time between running the check (ms|s|m|h). Defaults to `0s`.
     */
    interval?: string;
    /**
     * Consecutive failures needed to report unhealthy. Defaults to `0`.
     */
    retries?: number;
    /**
     * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
     */
    startPeriod?: string;
    /**
     * Command to run to check health. For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.
     */
    tests: string[];
    /**
     * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
     */
    timeout?: string;
}

export interface ContainerHost {
    /**
     * Hostname to add
     */
    host: string;
    /**
     * IP address this hostname should resolve to.
     */
    ip: string;
}

export interface ContainerLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ContainerMount {
    /**
     * Optional configuration for the bind type.
     */
    bindOptions?: outputs.ContainerMountBindOptions;
    /**
     * Whether the mount should be read-only.
     */
    readOnly?: boolean;
    /**
     * Mount source (e.g. a volume name, a host path).
     */
    source?: string;
    /**
     * Container path
     */
    target: string;
    /**
     * Optional configuration for the tmpfs type.
     */
    tmpfsOptions?: outputs.ContainerMountTmpfsOptions;
    /**
     * The mount type
     */
    type: string;
    /**
     * Optional configuration for the volume type.
     */
    volumeOptions?: outputs.ContainerMountVolumeOptions;
}

export interface ContainerMountBindOptions {
    propagation?: string;
}

export interface ContainerMountTmpfsOptions {
    mode?: number;
    sizeBytes?: number;
}

export interface ContainerMountVolumeOptions {
    driverName?: string;
    driverOptions?: {[key: string]: string};
    /**
     * User-defined key/value metadata
     */
    labels?: outputs.ContainerMountVolumeOptionsLabel[];
    noCopy?: boolean;
}

export interface ContainerMountVolumeOptionsLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ContainerNetworkData {
    /**
     * The network gateway of the container.
     *
     * @deprecated Use `network_data` instead. The network gateway of the container as read from its NetworkSettings.
     */
    gateway: string;
    globalIpv6Address: string;
    globalIpv6PrefixLength: number;
    /**
     * The IP address of the container.
     *
     * @deprecated Use `network_data` instead. The IP address of the container's first network it.
     */
    ipAddress: string;
    /**
     * The IP prefix length of the container.
     *
     * @deprecated Use `network_data` instead. The IP prefix length of the container as read from its NetworkSettings.
     */
    ipPrefixLength: number;
    ipv6Gateway: string;
    networkName: string;
}

export interface ContainerNetworksAdvanced {
    /**
     * The network aliases of the container in the specific network.
     */
    aliases?: string[];
    /**
     * The IPV4 address of the container in the specific network.
     */
    ipv4Address?: string;
    /**
     * The IPV6 address of the container in the specific network.
     */
    ipv6Address?: string;
    /**
     * The name or id of the network to use. You can use `name` or `id` attribute from a `docker.Network` resource.
     */
    name: string;
}

export interface ContainerPort {
    /**
     * Port exposed out of the container. If not given a free random port `>= 32768` will be used.
     */
    external: number;
    /**
     * Port within the container.
     */
    internal: number;
    /**
     * IP address/mask that can access this port. Defaults to `0.0.0.0`.
     */
    ip?: string;
    /**
     * Protocol that can be used over this port. Defaults to `tcp`.
     */
    protocol?: string;
}

export interface ContainerUlimit {
    /**
     * The hard limit
     */
    hard: number;
    /**
     * The name of the ulimit
     */
    name: string;
    /**
     * The soft limit
     */
    soft: number;
}

export interface ContainerUpload {
    /**
     * Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. Conflicts with `contentBase64` & `source`
     */
    content?: string;
    contentBase64?: string;
    /**
     * If `true`, the file will be uploaded with user executable permission. Defaults to `false`.
     */
    executable?: boolean;
    /**
     * Path to the file in the container where is upload goes to
     */
    file: string;
    /**
     * A filename that references a file which will be uploaded as the object content. This allows for large file uploads that do not get stored in state. Conflicts with `content` & `contentBase64`
     */
    source?: string;
    /**
     * If using `source`, this will force an update if the file content has updated but the filename has not.
     */
    sourceHash?: string;
}

export interface ContainerVolume {
    /**
     * The path in the container where the volume will be mounted.
     */
    containerPath?: string;
    /**
     * The container where the volume is coming from.
     */
    fromContainer?: string;
    /**
     * The path on the host where the volume is coming from.
     */
    hostPath?: string;
    /**
     * If `true`, this volume will be readonly. Defaults to `false`.
     */
    readOnly?: boolean;
    /**
     * The name of the docker volume which should be mounted.
     */
    volumeName?: string;
}

export interface GetNetworkIpamConfig {
    auxAddress?: {[key: string]: any};
    gateway?: string;
    ipRange?: string;
    subnet?: string;
}

export interface NetworkIpamConfig {
    /**
     * Auxiliary IPv4 or IPv6 addresses used by Network driver
     */
    auxAddress?: {[key: string]: any};
    /**
     * The IP address of the gateway
     */
    gateway?: string;
    /**
     * The ip range in CIDR form
     */
    ipRange?: string;
    /**
     * The subnet in CIDR form
     */
    subnet?: string;
}

export interface NetworkLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface PluginGrantPermission {
    /**
     * The name of the permission
     */
    name: string;
    /**
     * The value of the permission
     */
    values: string[];
}

export interface RegistryImageBuild {
    /**
     * The configuration for the authentication
     */
    authConfigs?: outputs.RegistryImageBuildAuthConfig[];
    /**
     * Pairs for build-time variables in the form TODO
     */
    buildArgs?: {[key: string]: string};
    /**
     * BuildID is an optional identifier that can be passed together with the build request. The same identifier can be used to gracefully cancel the build with the cancel request.
     */
    buildId?: string;
    /**
     * Images to consider as cache sources
     */
    cacheFroms?: string[];
    /**
     * Optional parent cgroup for the container
     */
    cgroupParent?: string;
    /**
     * The absolute path to the context folder. You can use the helper function '${path.cwd}/context-dir'.
     */
    context: string;
    /**
     * The length of a CPU period in microseconds
     */
    cpuPeriod?: number;
    /**
     * Microseconds of CPU time that the container can get in a CPU period
     */
    cpuQuota?: number;
    /**
     * CPUs in which to allow execution (e.g., `0-3`, `0`, `1`)
     */
    cpuSetCpus?: string;
    /**
     * MEMs in which to allow execution (`0-3`, `0`, `1`)
     */
    cpuSetMems?: string;
    /**
     * CPU shares (relative weight)
     */
    cpuShares?: number;
    /**
     * Dockerfile file. Defaults to `Dockerfile`
     */
    dockerfile?: string;
    /**
     * A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
     */
    extraHosts?: string[];
    /**
     * Always remove intermediate containers
     */
    forceRemove?: boolean;
    /**
     * Isolation represents the isolation technology of a container. The supported values are
     */
    isolation?: string;
    /**
     * User-defined key/value metadata
     */
    labels?: {[key: string]: string};
    /**
     * Set memory limit for build
     */
    memory?: number;
    /**
     * Total memory (memory + swap), -1 to enable unlimited swap
     */
    memorySwap?: number;
    /**
     * Set the networking mode for the RUN instructions during build
     */
    networkMode?: string;
    /**
     * Do not use the cache when building the image
     */
    noCache?: boolean;
    /**
     * Set platform if server is multi-platform capable
     */
    platform?: string;
    /**
     * Attempt to pull the image even if an older image exists locally
     */
    pullParent?: boolean;
    /**
     * A Git repository URI or HTTP/HTTPS context URI
     */
    remoteContext?: string;
    /**
     * Remove intermediate containers after a successful build (default behavior)
     */
    remove?: boolean;
    /**
     * The security options
     */
    securityOpts?: string[];
    /**
     * Set an ID for the build session
     */
    sessionId?: string;
    /**
     * Size of /dev/shm in bytes. The size must be greater than 0
     */
    shmSize?: number;
    /**
     * If true the new layers are squashed into a new image with a single new layer
     */
    squash?: boolean;
    /**
     * Suppress the build output and print image ID on success
     */
    suppressOutput?: boolean;
    /**
     * Set the target build stage to build
     */
    target?: string;
    /**
     * Configuration for ulimits
     */
    ulimits?: outputs.RegistryImageBuildUlimit[];
    /**
     * Version of the underlying builder to use
     */
    version?: string;
}

export interface RegistryImageBuildAuthConfig {
    auth?: string;
    email?: string;
    hostName: string;
    identityToken?: string;
    password?: string;
    registryToken?: string;
    serverAddress?: string;
    userName?: string;
}

export interface RegistryImageBuildUlimit {
    hard: number;
    /**
     * The name of the Docker image.
     */
    name: string;
    soft: number;
}

export interface RemoteImageBuild {
    /**
     * Set build-time variables
     */
    buildArg?: {[key: string]: string};
    /**
     * Name of the Dockerfile. Defaults to `Dockerfile`.
     */
    dockerfile?: string;
    /**
     * Always remove intermediate containers
     */
    forceRemove?: boolean;
    /**
     * Set metadata for an image
     */
    label?: {[key: string]: string};
    /**
     * Do not use cache when building the image
     */
    noCache?: boolean;
    /**
     * Context path
     */
    path: string;
    /**
     * Remove intermediate containers after a successful build. Defaults to  `true`.
     */
    remove?: boolean;
    /**
     * Name and optionally a tag in the 'name:tag' format
     */
    tags?: string[];
    /**
     * Set the target build stage to build
     */
    target?: string;
}

export interface SecretLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ServiceAuth {
    /**
     * The password
     */
    password?: string;
    /**
     * The address of the server for the authentication
     */
    serverAddress: string;
    /**
     * The username
     */
    username?: string;
}

export interface ServiceConvergeConfig {
    /**
     * The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.
     */
    delay?: string;
    /**
     * The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`
     */
    timeout?: string;
}

export interface ServiceEndpointSpec {
    /**
     * The mode of resolution to use for internal load balancing between tasks
     */
    mode: string;
    /**
     * List of exposed ports that this service is accessible on from the outside. Ports can only be provided if 'vip' resolution mode is used
     */
    ports?: outputs.ServiceEndpointSpecPort[];
}

export interface ServiceEndpointSpecPort {
    /**
     * Name of the service
     */
    name?: string;
    protocol?: string;
    publishMode?: string;
    publishedPort: number;
    targetPort: number;
}

export interface ServiceLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ServiceMode {
    /**
     * The global service mode. Defaults to `false`
     */
    global?: boolean;
    /**
     * The replicated service mode
     */
    replicated: outputs.ServiceModeReplicated;
}

export interface ServiceModeReplicated {
    replicas?: number;
}

export interface ServiceRollbackConfig {
    /**
     * Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.
     */
    delay?: string;
    /**
     * Action on rollback failure: pause | continue. Defaults to `pause`.
     */
    failureAction?: string;
    /**
     * Failure rate to tolerate during a rollback. Defaults to `0.0`.
     */
    maxFailureRatio?: string;
    /**
     * Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
     */
    monitor?: string;
    /**
     * Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
     */
    order?: string;
    /**
     * Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`
     */
    parallelism?: number;
}

export interface ServiceTaskSpec {
    /**
     * The spec for each container
     */
    containerSpec: outputs.ServiceTaskSpecContainerSpec;
    /**
     * A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).
     */
    forceUpdate: number;
    /**
     * Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified
     */
    logDriver?: outputs.ServiceTaskSpecLogDriver;
    /**
     * Ids of the networks in which the  container will be put in
     */
    networks?: string[];
    /**
     * The placement preferences
     */
    placement: outputs.ServiceTaskSpecPlacement;
    /**
     * Resource requirements which apply to each individual container created as part of the service
     */
    resources: outputs.ServiceTaskSpecResources;
    /**
     * Specification for the restart policy which applies to containers created as part of this service.
     */
    restartPolicy: outputs.ServiceTaskSpecRestartPolicy;
    /**
     * Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).
     */
    runtime: string;
}

export interface ServiceTaskSpecContainerSpec {
    args?: string[];
    commands?: string[];
    configs?: outputs.ServiceTaskSpecContainerSpecConfig[];
    dir?: string;
    dnsConfig: outputs.ServiceTaskSpecContainerSpecDnsConfig;
    env?: {[key: string]: string};
    groups?: string[];
    healthcheck: outputs.ServiceTaskSpecContainerSpecHealthcheck;
    hostname?: string;
    hosts?: outputs.ServiceTaskSpecContainerSpecHost[];
    image: string;
    isolation?: string;
    /**
     * User-defined key/value metadata
     */
    labels?: outputs.ServiceTaskSpecContainerSpecLabel[];
    mounts?: outputs.ServiceTaskSpecContainerSpecMount[];
    privileges?: outputs.ServiceTaskSpecContainerSpecPrivileges;
    readOnly?: boolean;
    secrets?: outputs.ServiceTaskSpecContainerSpecSecret[];
    stopGracePeriod: string;
    stopSignal?: string;
    user?: string;
}

export interface ServiceTaskSpecContainerSpecConfig {
    configId: string;
    configName?: string;
    fileGid?: string;
    fileMode?: number;
    fileName: string;
    fileUid?: string;
}

export interface ServiceTaskSpecContainerSpecDnsConfig {
    nameservers: string[];
    options?: string[];
    searches?: string[];
}

export interface ServiceTaskSpecContainerSpecHealthcheck {
    interval?: string;
    retries?: number;
    startPeriod?: string;
    tests: string[];
    timeout?: string;
}

export interface ServiceTaskSpecContainerSpecHost {
    host: string;
    ip: string;
}

export interface ServiceTaskSpecContainerSpecLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ServiceTaskSpecContainerSpecMount {
    bindOptions?: outputs.ServiceTaskSpecContainerSpecMountBindOptions;
    readOnly?: boolean;
    source?: string;
    target: string;
    tmpfsOptions?: outputs.ServiceTaskSpecContainerSpecMountTmpfsOptions;
    type: string;
    volumeOptions?: outputs.ServiceTaskSpecContainerSpecMountVolumeOptions;
}

export interface ServiceTaskSpecContainerSpecMountBindOptions {
    propagation?: string;
}

export interface ServiceTaskSpecContainerSpecMountTmpfsOptions {
    /**
     * Scheduling mode for the service
     */
    mode?: number;
    sizeBytes?: number;
}

export interface ServiceTaskSpecContainerSpecMountVolumeOptions {
    driverName?: string;
    driverOptions?: {[key: string]: string};
    /**
     * User-defined key/value metadata
     */
    labels?: outputs.ServiceTaskSpecContainerSpecMountVolumeOptionsLabel[];
    noCopy?: boolean;
}

export interface ServiceTaskSpecContainerSpecMountVolumeOptionsLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export interface ServiceTaskSpecContainerSpecPrivileges {
    credentialSpec?: outputs.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
    seLinuxContext?: outputs.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
}

export interface ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
    file?: string;
    registry?: string;
}

export interface ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
    disable?: boolean;
    level?: string;
    role?: string;
    type?: string;
    user?: string;
}

export interface ServiceTaskSpecContainerSpecSecret {
    fileGid?: string;
    fileMode?: number;
    fileName: string;
    fileUid?: string;
    secretId: string;
    secretName?: string;
}

export interface ServiceTaskSpecLogDriver {
    /**
     * Name of the service
     */
    name: string;
    options?: {[key: string]: string};
}

export interface ServiceTaskSpecPlacement {
    constraints?: string[];
    maxReplicas?: number;
    platforms?: outputs.ServiceTaskSpecPlacementPlatform[];
    prefs?: string[];
}

export interface ServiceTaskSpecPlacementPlatform {
    architecture: string;
    os: string;
}

export interface ServiceTaskSpecResources {
    limits?: outputs.ServiceTaskSpecResourcesLimits;
    reservation?: outputs.ServiceTaskSpecResourcesReservation;
}

export interface ServiceTaskSpecResourcesLimits {
    memoryBytes?: number;
    nanoCpus?: number;
}

export interface ServiceTaskSpecResourcesReservation {
    genericResources?: outputs.ServiceTaskSpecResourcesReservationGenericResources;
    memoryBytes?: number;
    nanoCpus?: number;
}

export interface ServiceTaskSpecResourcesReservationGenericResources {
    discreteResourcesSpecs?: string[];
    namedResourcesSpecs?: string[];
}

export interface ServiceTaskSpecRestartPolicy {
    condition?: string;
    delay?: string;
    maxAttempts?: number;
    window?: string;
}

export interface ServiceUpdateConfig {
    /**
     * Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.
     */
    delay?: string;
    /**
     * Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.
     */
    failureAction?: string;
    /**
     * Failure rate to tolerate during an update. Defaults to `0.0`.
     */
    maxFailureRatio?: string;
    /**
     * Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
     */
    monitor?: string;
    /**
     * Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
     */
    order?: string;
    /**
     * Maximum number of tasks to be updated in one iteration. Defaults to `1`
     */
    parallelism?: number;
}

export interface VolumeLabel {
    /**
     * Name of the label
     */
    label: string;
    /**
     * Value of the label
     */
    value: string;
}

export namespace config {
    export interface RegistryAuth {
        address: string;
        configFile?: string;
        configFileContent?: string;
        password?: string;
        username?: string;
    }

}
