import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { BlogPost } from '../@types/schema'
import BlogCard from '../components/BlogCard'
import NotionService from '../services/notion-service'
import Header from '../components/header'

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = 'WISE TECH'
  const description = '와이즈인 컴퍼니 기술블로그'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'description'} title={'description'} content={description} />
        <meta name={'og:title'} title={'og:title'} content={title} />
        <meta name={'og:description'} title={'og:description'} content={title} />
        <link href="/favicon.ico" rel="wisein" />
      </Head>

      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="h-full pt-4 pb-16 mx-auto">
            <Header />
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {posts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
