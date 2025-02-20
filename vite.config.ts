// const getGitInfo = () => { ... }; // Comment out the entire function
// const pkg = getPackageJson();

export default defineConfig((config) => {
  return {
    define: {
      // __COMMIT_HASH: JSON.stringify(gitInfo.commitHash), // Comment out these lines
      // __GIT_BRANCH: JSON.stringify(gitInfo.branch),
      // __GIT_COMMIT_TIME: JSON.stringify(gitInfo.commitTime),
      // __GIT_AUTHOR: JSON.stringify(gitInfo.author),
      // __GIT_EMAIL: JSON.stringify(gitInfo.email),
      // __GIT_REMOTE_URL: JSON.stringify(gitInfo.remoteUrl),
      // __GIT_REPO_NAME: JSON.stringify(gitInfo.repoName),
      // __APP_VERSION: JSON.stringify(process.env.npm_package_version),
      // __PKG_NAME: JSON.stringify(pkg.name),
      // __PKG_DESCRIPTION: JSON.stringify(pkg.description),
      // __PKG_LICENSE: JSON.stringify(pkg.license),
      // __PKG_DEPENDENCIES: JSON.stringify(pkg.dependencies),
      // __PKG_DEV_DEPENDENCIES: JSON.stringify(pkg.devDependencies),
      // __PKG_PEER_DEPENDENCIES: JSON.stringify(pkg.peerDependencies),
      // __PKG_OPTIONAL_DEPENDENCIES: JSON.stringify(pkg.optionalDependencies),
    },
    // ... (rest of your configuration)
  };
});
