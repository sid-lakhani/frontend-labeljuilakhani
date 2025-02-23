import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose lg:prose-lg max-w-full text-black/60 ">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-black/90 font-normal my-6">{children}</h1>,
          h2: ({ children }) => <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-black/90 font-normal my-4">{children}</h2>,
          h3: ({ children }) => <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-black/90 font-normal my-2">{children}</h3>,
          p: ({ children }) => <p className="font-sen text-xs md:text-base lg:text-lg leading-relaxed my-2">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 underline hover:text-blue-800">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="list-disc text-black/90  list-inside my-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal text-black/90  list-inside my-2">{children}</ol>,
          li: ({ children }) => <li className="my-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-gray-200 text-red-600 px-2 py-1 rounded-md font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4">
              {children}
            </pre>
          ),
          del: ({ children }) => <del className="text-red-500">{children}</del>,
          span: ({ children }) => <span className="underline">{children}</span>,
          em: ({ children }) => <em className="italic">{children}</em>,
          strong: ({ children }) => <strong className="text-black/90 font-bold">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
