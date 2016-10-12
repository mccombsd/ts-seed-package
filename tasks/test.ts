import { spawn } from "child_process";
import { resolve } from "path";

const cover = createSpawn(`node_modules\\.bin\\istanbul cover node_modules/jasmine/bin/jasmine.js JASMINE_CONFIG_PATH=./tests/jasmine.json`);
console.log(`Coverage`);
cover.on("exit", (code) => {
    console.log(`Remapping`);
    const remap = createSpawn(`node_modules\\.bin\\remap-istanbul -i coverage/coverage.json -o ./coverage/remap-coverage.json`);
    remap.on("exit", (code) => {
        console.log(`Remapping report`);
        const remap_report = createSpawn(`node_modules\\.bin\\remap-istanbul -i coverage/coverage.json -o ./coverage/html -t html`);
    });
});

function createSpawn(command: string): any {
    return spawn("cmd", ["/s", "/c", command], { stdio: "inherit" });
}