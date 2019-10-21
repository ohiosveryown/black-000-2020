exports.onCreatePages = function() {
  const posts = [...this.pages.values()]
    .filter(page => page.type === 'post' && !page.draft)
    .sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1
    })
  const selectFields = page => (page && {
    title: page.title,
    permalink: page.permalink,
  })
  for (const [index, post] of posts.entries()) {
    post.prevPost = selectFields(posts[index - 1])
    post.nextPost = selectFields(posts[index + 1])
  }
}