
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
              path: "/posts/test-one.html",
              meta: {
                __relative: '_posts/test-one.md',
                __pageId: 'fda08312'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-one-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/test-one.md?saberPage=fda08312")
                
              }
            },
{
              path: "/posts/test-two.html",
              meta: {
                __relative: '_posts/test-two.md',
                __pageId: 'eb894e5e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-two-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/test-two.md?saberPage=eb894e5e")
                
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