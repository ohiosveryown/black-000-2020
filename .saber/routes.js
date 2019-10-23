
    export default [
      {
              path: "/posts/d-01.html",
              meta: {
                __relative: '_posts/d-01.md',
                __pageId: '076f5f38'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-01-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-01.md?saberPage=076f5f38")
                
              }
            },
{
              path: "/posts/d-02.html",
              meta: {
                __relative: '_posts/d-02.md',
                __pageId: '076fd397'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-02-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-02.md?saberPage=076fd397")
                
              }
            },
{
              path: "/posts/d-03.html",
              meta: {
                __relative: '_posts/d-03.md',
                __pageId: '077047f6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-03-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-03.md?saberPage=077047f6")
                
              }
            },
{
              path: "/posts/d-04.html",
              meta: {
                __relative: '_posts/d-04.md',
                __pageId: '0770bc55'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-04-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-04.md?saberPage=0770bc55")
                
              }
            },
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
              path: "/posts/d-05.html",
              meta: {
                __relative: '_posts/d-05.md',
                __pageId: '077130b4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-05-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-05.md?saberPage=077130b4")
                
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