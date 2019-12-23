
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
              path: "/posts/d-05.html",
              meta: {
                __relative: '_posts/d-05.md',
                __pageId: '077130b4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-05-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-05.md?saberPage=077130b4")
                
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
              path: "/info.html",
              meta: {
                __relative: 'info.md',
                __pageId: '1845f05f'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--info-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/info.md?saberPage=1845f05f")
                
              }
            },
{
              path: "/posts/d-011.html",
              meta: {
                __relative: '_posts/d-011.md',
                __pageId: '33060c3e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-011-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-011.md?saberPage=33060c3e")
                
              }
            },
{
              path: "/posts/d-010.html",
              meta: {
                __relative: '_posts/d-010.md',
                __pageId: '3306f4fc'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-010-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-010.md?saberPage=3306f4fc")
                
              }
            },
{
              path: "/posts/d-012.html",
              meta: {
                __relative: '_posts/d-012.md',
                __pageId: '33052380'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-012-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-012.md?saberPage=33052380")
                
              }
            },
{
              path: "/posts/d-06.html",
              meta: {
                __relative: '_posts/d-06.md',
                __pageId: '0771a513'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-06-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-06.md?saberPage=0771a513")
                
              }
            },
{
              path: "/posts/d-07.html",
              meta: {
                __relative: '_posts/d-07.md',
                __pageId: '07721972'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-07-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-07.md?saberPage=07721972")
                
              }
            },
{
              path: "/posts/d-08.html",
              meta: {
                __relative: '_posts/d-08.md',
                __pageId: '07728dd1'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-08-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-08.md?saberPage=07728dd1")
                
              }
            },
{
              path: "/posts/d-09.html",
              meta: {
                __relative: '_posts/d-09.md',
                __pageId: '07730230'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-d-09-md" */ "/Users/pence/Desktop/projects/black-000/black-000-2020/pages/_posts/d-09.md?saberPage=07730230")
                
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