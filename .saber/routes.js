
    export default [
      {
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: 'b0b63c1c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/index.vue?saberPage=b0b63c1c")
                
              }
            },
{
              path: "/info.html",
              meta: {
                __relative: 'info.vue',
                __pageId: '1f0f8084'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--info-vue" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/info.vue?saberPage=1f0f8084")
                
              }
            },
{
              path: "/test.html",
              meta: {
                __relative: 'test.vue',
                __pageId: 'bcfae4bc'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--test-vue" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/test.vue?saberPage=bcfae4bc")
                
              }
            },
{
              path: "/maura-chanz.html",
              meta: {
                __relative: 'maura-chanz.vue',
                __pageId: '34d06d4b'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--maura-chanz-vue" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/maura-chanz.vue?saberPage=34d06d4b")
                
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