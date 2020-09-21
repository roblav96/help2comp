export = `
usage: xctool [BASE OPTIONS] [ACTION [ACTION ARGUMENTS]] ...

Examples:
    xctool [BASE OPTIONS] run-tests [-test-sdk SDK] [-only SPEC] [-omit SPEC] [-freshSimulator] [-resetSimulator] [-newSimulatorInstance] [-noResetSimulatorOnFailure] [-freshInstall] [-parallelize] [-logicTestBucketSize N] [-appTestBucketSize N] [-bucketBy BUCKETBY] [-failOnEmptyTestBundles] [-listTestsOnly] [-targetedDeviceFamily FAMILY] [-testTimeout N] [-logicTest BUNDLE] [-appTest BUNDLE:HOST_APP] [-uiTest BUNDLE:RUNNER:HOST] [-waitForDebugger]

Base Options:
    -help                      show help
    -workspace PATH            path to workspace
    -project PATH              path to project
    -scheme NAME               scheme to use for building or testing
    -resultBundlePath PATH     path to bundle to write results from performing a build action
    -find-target TARGET        Search for the workspace/project/scheme to build the target
    -find-target-path PATH     Path to search for -find-target.
    -find-target-exclude-paths Colon-separated list of paths to exclude for -find-target.
    -sdk ALIAS                 alias or path to sdk to use for building (e.g. iphonesimulator, iphonesimulator8.4)
    -configuration NAME        configuration to use (e.g. Debug, Release)
    -destination DESTINATION   use the destination described by DESTINATION (a comma-separated set of key=value pairs describing the destination to use)
    -destination-timeout DESTINwait for TIMEOUT seconds while searching for the destination device
    -jobs NUMBER               number of concurrent build operations to run
    -arch ARCH                 arch to build for (e.g. i386, armv7)
    -toolchain PATH            path to toolchain
    -xcconfig PATH             path to an xcconfig
    -reporter TYPE[:FILE]      add reporter
    -showBuildSettings         display a list of build settings and values
    -showTasks                 show all tasks being spawned by xctool
    -actionScripts             run pre and post action scripts defined in the scheme
    -version                   print version and exit
    -derivedDataPath PATH      override the default derived data path
    -launch-timeout TIMEOUT    simulator launch timeout in seconds (default is 30 seconds)
    SETTING=VALUE              Set the build 'setting' to 'value'
    -DEFAULT=VALUE             Set the user default 'default' to 'value'

Available Reporters:
    json-stream
    junit
    plain
    teamcity
    user-notifications
    pretty
    json-compilation-database
    phabricator

Options for 'run-tests' action:
    -test-sdk SDK              SDK to test with
    -only SPEC                 SPEC is TARGET[:Class/case[,Class2/case2]]; use * when specifying class or case prefix.
    -omit SPEC                 SPEC is TARGET[:Class/case[,Class2/case2]]; use * when specifying class or case prefix.
    -freshSimulator            Start fresh simulator for each application test target
    -resetSimulator            Reset simulator content and settings and restart it before running every app test run.
    -newSimulatorInstance      Start new instance of simulator for each application test target.
    -noResetSimulatorOnFailure Do not reset simulator content and settings if running failed.
    -freshInstall              Use clean install of TEST_HOST for every app test run
    -parallelize               Parallelize execution of tests
    -logicTestBucketSize N     Break logic test bundles in buckets of N test cases.
    -appTestBucketSize N       Break app test bundles in buckets of N test cases.
    -bucketBy BUCKETBY         Either 'case' (default) or 'class'.
    -failOnEmptyTestBundles    Fail when an empty test bundle was run.
    -listTestsOnly             Skip actual test running and list them only.
    -targetedDeviceFamily FAMILTarget specific type of simulator when running tests (1=iPhone, 2=iPad, 4=Apple Watch)
    -testTimeout N             Force individual test cases to be killed after specified timeout.
    -logicTest BUNDLE          Add a path to a logic test bundle to run
    -appTest BUNDLE:HOST_APP   Add a path to an app test bundle with the path to its host app
    -uiTest BUNDLE:RUNNER:HOST Add a path to an app test bundle, the path to a runner app and the path to its host app
    -waitForDebugger           Spawned test processes will wait for a debugger to be attached before invoking tests. With the pretty reporter, a message will be displayed with the PID to attach. With the plain reporter, it will just halt.

`
