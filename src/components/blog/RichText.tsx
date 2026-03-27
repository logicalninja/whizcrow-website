import React from 'react'

export const RichText = ({ content }: { content: any }) => {
    if (!content) {
        return null;
    }

    if (typeof content === 'string') {
        return (
            <div 
                className="rich-text w-full max-w-none prose prose-whizcrow lg:prose-xl md:prose-lg"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    if (!content.root || !content.root.children) {
        return null;
    }

    return null;
}
