import { AutoRc } from "auto";


/** Auto configuration */
export default function rc(): AutoRc {
    return {
        plugins: [
            "npm",
            "conventional-commits",
            "first-time-contributor",
            "released"
        ],
        // Follow the 2 branch deployment scheme
        // https://intuit.github.io/auto/docs/generated/shipit#next-branch-default
        baseBranch: "stable",        // latest "official" release
        prereleaseBranches: ["next"], // latest changes (subject to breaking). next, alpha, beta, and other multi-feature test branches can all be added here.
        author: "GitHub Actions Bot <vega-actions-bot@users.noreply.github.com>"
    };
}
