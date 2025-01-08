import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../api/SanityClient";
import { Helmet } from "react-helmet";
import { PortableText } from "@portabletext/react";

export default function BlogDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setIsLoading(true);
        setError(null);

        const query = `*[_type == "blog" && slug.current == $slug][0]{
          title,
          author,
          publishDate,
          content,
          "category": category->title,
          tags,
          "featuredImage": featuredImage{asset->{url}},
          excerpt,
          seo
        }`;
        const blogData = await client.fetch(query, { slug });

        if (!blogData) {
          throw new Error("Blog no encontrado.");
        }

        setBlog(blogData);
      } catch (error) {
        setError(error.message || "Ocurrió un error cargando el blog.");
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) fetchBlog();
  }, [slug]);

  if (isLoading) return <div className="text-center py-10">Cargando...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!blog) return <div className="text-center py-10">Blog no encontrado</div>;

  return (
    <>
      <Helmet>
        <title>{blog.seo?.title || blog.title}</title>
        <meta
          name="description"
          content={blog.seo?.description || blog.excerpt}
        />
        <meta name="keywords" content={blog.seo?.keywords?.join(", ")} />
        <meta property="og:title" content={blog.seo?.title || blog.title} />
        <meta
          property="og:description"
          content={blog.seo?.description || blog.excerpt}
        />
        <meta property="og:image" content={blog.featuredImage?.asset?.url} />
      </Helmet>
      <section className="max-w-4xl mx-auto px-4 py-44">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <div className="text-gray-600 text-sm mb-6">
          Por <span className="font-semibold">{blog.author}</span> el{" "}
          {new Date(blog.publishDate).toLocaleDateString()}
        </div>

        {blog.featuredImage?.asset?.url && (
          <img
            src={blog.featuredImage.asset.url}
            alt={blog.title}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="max-w-none mb-6">
          <PortableText
            value={blog.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="mb-4 text-gray-700">{children}</p>
                ),
              },
              types: {
                image: ({ value }) => (
                  <img
                    src={value.asset.url}
                    alt={value.alt || "Blog image"}
                    className="rounded-lg mb-4"
                  />
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <a
                    href={value.href}
                    className="text-violet-color hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />
        </div>

        <p className="text-gray-700 mb-4">{blog.excerpt}</p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-gray-600 text-sm">Categorías:</span>
          <span className="bg-violet-100 text-violet-color px-2 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>
      </section>
    </>
  );
}
