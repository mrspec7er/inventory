const config = {
  branches: ["main"],
  extends: "semantic-release-monorepo",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["backend/*", "frontend/*.ts", "nginx/*"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};

module.exports = config;
