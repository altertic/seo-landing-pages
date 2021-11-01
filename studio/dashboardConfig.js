export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '617f82f38528ac8ffc95d60c',
                  title: 'Sanity Studio',
                  name: 'seo-landing-pages-studio',
                  apiId: '315bbc39-dad4-4d7f-8a7b-5e58ff716d6f'
                },
                {
                  buildHookId: '617f82f36ee0ab950a17898c',
                  title: 'Landing pages Website',
                  name: 'seo-landing-pages',
                  apiId: '87259319-765b-488c-9d0d-851899086572'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/altertic/seo-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://seo-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
