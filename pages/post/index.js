import Link from 'next/link'
import PostLayout from '../../layouts/postLayout'

const Index = () => {
  return (
    <div>
      <h1>Post Index </h1>
      <Link href='/post/postOne'>Go to Post 1 </Link>
      <Link href='/post/postTwo'>Go to Post 2 </Link>
    </div>
  )
}

Index.Layout = PostLayout

export default Index
