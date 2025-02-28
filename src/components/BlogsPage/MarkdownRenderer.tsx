import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose lg:prose-lg max-w-full text-primary/70 ">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-primary font-normal mb-8">{children}</h1>,
          h2: ({ children }) => <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary font-normal my-8">{children}</h2>,
          h3: ({ children }) => <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-primary font-normal my-6">{children}</h3>,
          h4: ({ children }) => <h4 className="font-playfair text-lg md:text-xl lg:text-2xl text-primary font-normal my-6">{children}</h4>,
          h6: ({ children }) => <h6 className="-my-2">{children}</h6>,
          p: ({ children }) => <p className="font-sen text-xs md:text-base lg:text-lg leading-relaxed my-6">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 underline duration-200 transition-colors hover:text-blue-800">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="list-disc text-xs md:text-base lg:text-lg text-primary list-inside">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal text-xs md:text-base lg:text-lg text-primary list-inside">{children}</ol>,
          li: ({ children }) => <li className="my-4 text-xs md:text-base lg:text-lg text-primary/70 leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary text-xs md:text-base lg:text-lg pl-4 italic text-slate-700 my-4">
              {children}
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className="bg-slate-700 text-quaternary px-2 py-1 text-xs md:text-base lg:text-lg rounded-md font-mono">
              {children}
            </pre>
          ),
          del: ({ children }) => <del className="text-xs ">{children}</del>,
          span: ({ children }) => <span className="underline ">{children}</span>,
          em: ({ children }) => <em className="italic ">{children}</em>,
          strong: ({ children }) => <strong className="text-primary font-semibold ">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
