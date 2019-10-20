
    export default [
      {
              path: "/posts/test-four.html",
              meta: {
                __relative: '_posts/test-four.md',
                __pageId: '69376bf2'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-four-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/test-four.md?saberPage=69376bf2")
                
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
              path: "/posts/test-three.html",
              meta: {
                __relative: '_posts/test-three.md',
                __pageId: '5127b382'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-three-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/test-three.md?saberPage=5127b382")
                
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
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]