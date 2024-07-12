const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "flynnzhou34",
        mongodb_password: "FHmKiDOqjPimk5fq",
        mongodb_clustername: "Cluster-testme",
        mongodb_database: "nextjs-blog-db",
      },
    };
  }
  //another env
  return {
    env: {
      mongodb_username: "flynnzhou34",
      mongodb_password: "FHmKiDOqjPimk5fq",
      mongodb_clustername: "Cluster-testme",
      mongodb_database: "nextjs-blog-db",
    },
  };
};
