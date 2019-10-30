
    export default [
      {
              path: "/posts/d-01.html",
              meta: {
                __relative: '_posts/d-01.md',
                __pageId: '1f0fc53f'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-01-md" */ "/Users/mpence/Desktop/black-000-2020/pages/_posts/d-01.md?saberPage=1f0fc53f")
                
              }
            },
{
              path: "/posts/d-02.html",
              meta: {
                __relative: '_posts/d-02.md',
                __pageId: '1f10399e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-02-md" */ "/Users/mpence/Desktop/black-000-2020/pages/_posts/d-02.md?saberPage=1f10399e")
                
              }
            },
{
              path: "/posts/d-03.html",
              meta: {
                __relative: '_posts/d-03.md',
                __pageId: '1f10adfd'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-03-md" */ "/Users/mpence/Desktop/black-000-2020/pages/_posts/d-03.md?saberPage=1f10adfd")
                
              }
            },
{
              path: "/posts/d-04.html",
              meta: {
                __relative: '_posts/d-04.md',
                __pageId: '1f11225c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-04-md" */ "/Users/mpence/Desktop/black-000-2020/pages/_posts/d-04.md?saberPage=1f11225c")
                
              }
            },
{
              path: "/posts/d-05.html",
              meta: {
                __relative: '_posts/d-05.md',
                __pageId: '1f1196bb'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-05-md" */ "/Users/mpence/Desktop/black-000-2020/pages/_posts/d-05.md?saberPage=1f1196bb")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '45ed6ef2'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/mpence/Desktop/black-000-2020/pages/index.md?saberPage=45ed6ef2")
                
              }
            },
{
              path: "/info.html",
              meta: {
                __relative: 'info.md',
                __pageId: '0aa33438'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--info-md" */ "/Users/mpence/Desktop/black-000-2020/pages/info.md?saberPage=0aa33438")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/mpence/Desktop/black-000-2020/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]