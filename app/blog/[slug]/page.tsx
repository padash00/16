import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/#blog"
          className="inline-flex items-center text-neon-cyan hover:text-neon-magenta transition-colors mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>

        <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden neon-border-cyan">
          <div className="relative h-64 md:h-80">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=CS2 Blog Post"
              alt="Blog post featured image"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
              {decodeURIComponent(params.slug).replace(/-/g, " ")}
            </h1>
            <div className="text-gray-400 mb-6">
              <time dateTime="2023-04-03">April 3, 2023</time> • CS2 News
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                This is a placeholder for the blog post content. In a real implementation, this would be populated with
                the actual content of the blog post.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
              <p className="mb-4">
                Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget
                nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl
                eget nisl.
              </p>
              <p className="mb-4">Stay tuned for more updates on CS2 news and tournaments!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
