export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "632741aac2a8214a90629833",
                  title: "Sanity Studio",
                  name: "micro-b-studio",
                  apiId: "67169d6e-acd8-4009-8152-1029432575ad",
                },
                {
                  buildHookId: "632741aac049e44e18f94974",
                  title: "Blog Website",
                  name: "micro-b",
                  apiId: "623a6c69-1bbe-4bba-87a6-c7b9b7d07191",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/grlcodr/micro-b",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://micro-b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
