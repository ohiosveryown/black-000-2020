
    export default [
      {
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '26bb90aa'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/index.md?saberPage=26bb90aa")
                
              }
            },
{
              path: "/posts/delete-one.html",
              meta: {
                __relative: '_posts/delete-one.md',
                __pageId: '5fc703fe'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete-one-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/delete-one.md?saberPage=5fc703fe")
                
              }
            },
{
              path: "/posts/delete-two.html",
              meta: {
                __relative: '_posts/delete-two.md',
                __pageId: '68d29e58'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete-two-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/delete-two.md?saberPage=68d29e58")
                
              }
            },
{
              path: "/posts/delete-three.html",
              meta: {
                __relative: '_posts/delete-three.md',
                __pageId: '6d482606'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete-three-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/delete-three.md?saberPage=6d482606")
                
              }
            },
{
              path: "/posts/delete-four.html",
              meta: {
                __relative: '_posts/delete-four.md',
                __pageId: '80949540'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete-four-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/delete-four.md?saberPage=80949540")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]