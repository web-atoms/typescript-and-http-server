var spawn = require('child_process').spawn;

const spawnDetached = (prefix, cmd, params) => {
    const proc = spawn(cmd, params, {
        detached: true
    });
    proc.stderr.setEncoding("utf-8");
    proc.stdout.setEncoding("utf-8");
    proc.stdout.on("data", (data) => console.log(`${prefix}${data}`));
    proc.stderr.on("data", (data) => console.error(`${prefix}${data}`));
}

spawnDetached("tsc ", 'tsc', ['--watch']);
spawnDetached('hs', "http-server", []);
spawnDetached('jex', "jex", [ "build.jsx"]);