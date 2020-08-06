export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2bd2d36411f25e3872d0de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h7ae56t7',
                  apiId: '016e3e24-235d-49a1-891b-238a8ed0aab5'
                },
                {
                  buildHookId: '5f2bd2d36411f239a472d016',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z3pv8ekg',
                  apiId: 'b232383a-5eeb-46d7-90c8-1f1a36c4b5ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/estudiooka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z3pv8ekg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
