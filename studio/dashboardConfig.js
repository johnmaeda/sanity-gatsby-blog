export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1f57c061a26dd42ea5c16c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j8hu8hha',
                  apiId: '3e77d28a-c47a-4129-ac95-1bc5b084353d'
                },
                {
                  buildHookId: '5d1f57c032d4c0b0e51645f0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9cak1f47',
                  apiId: 'b5c6eb73-ec53-4cd1-997f-62b5adbec448'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnmaeda/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9cak1f47.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
