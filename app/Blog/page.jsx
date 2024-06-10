import { FaArrowRight } from "react-icons/fa";
import DOMPurify from 'isomorphic-dompurify'; // Import for server-side sanitization
import Link from "next/link";
import Image from "next/image";

async function BlogData() {
  const response = await fetch('https://admin.just.edu.so/wp-json/wp/v2/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export default async function Blog() {
  let posts;
  try {
    posts = await BlogData();
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h1>Failed to load posts</h1>
      </div>
    );
  }

  const sanitizedPosts = posts.map((post) => ({
    ...post,
    title: DOMPurify.sanitize(post.title.rendered),
    excerpt: DOMPurify.sanitize(post.excerpt.rendered),
  }));

  return (
    <>
      <h1>Products</h1>
      <section className="p-4 bg-gray-50 sm:py-16 lg:py-24">
        <div className="container mx-auto  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3">
            {sanitizedPosts.map((post) => (
              <article key={post.id} className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-52"
                    src={post.x_featured_media_large}
                    alt=""
                  />
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {post.date}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">
                    <Link href={`Blog/${post.id}`} title="" className="text-black">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base text-gray-600" dangerouslySetInnerHTML={{__html:post.excerpt}}></p>
                  <Link
                    href={`Blog/${post.id}`}
                    title=""
                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pr-color transition-all duration-200 border-b-2 border-transparent hover:border-pr-color"
                  >
                    Read More
                    <FaArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
