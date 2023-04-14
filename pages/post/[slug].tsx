import { GetStaticProps, InferGetStaticPropsType } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import NotionService from '../../services/notion-service'
import rehypeStringify from 'rehype-stringify/lib'
import remarkRehype from 'remark-rehype/lib'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse/lib'
import { unified } from 'unified'

const Post = ({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={'description'} title={'description'} content={post.description} />
        <meta name={'og:title'} title={'og:title'} content={post.title === undefined ? '제목 없음' : post.title} />
        <meta name={'og:description'} title={'og:description'} content={post.description} />
        <meta name={'og:image'} title={'og:image'} content={post?.cover} />
      </Head>

      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center">
            <article className="prose" dangerouslySetInnerHTML={{ __html: markdown }}></article>
          </div>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService()
  // @ts-ignore
  const p = await notionService.getSingleBlogPost(context.params?.slug)
  if (!p) {
    throw ''
  }
  const load = await unified()
    .use(remarkParse) // markdown을 mdast로 변환
    .use(remarkGfm) // remark가 GFM도 지원 가능하도록
    .use(remarkBreaks) // remark가 line-break도 지원 가능하도록
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast를 hast로 변환
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast를 html 변환
    .process(p.markdown)
  return {
    props: {
      markdown: load.value,
      post: p.post,
    },
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService()

  const posts = await notionService.getPublishedBlogPosts()

  const paths = posts.map((post) => {
    return `/post/${post.slug}`
  })

  return {
    paths,
    fallback: false,
  }
}

export default Post
