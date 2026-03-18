import React from 'react'

export const RichText = ({ content }: { content: any }) => {
    if (!content || !content.root || !content.root.children) {
        return null;
    }

    const serialize = (nodes: any[]): React.ReactNode => {
        return nodes.map((node, i) => {
            if (node.type === 'text') {
                let text = node.text;
                if (node.format & 1) text = <strong key={i}>{text}</strong>;
                if (node.format & 2) text = <em key={i}>{text}</em>;
                return text;
            }

            if (!node) return null;

            switch (node.type) {
                case 'paragraph':
                    return (
                        <p key={i} className="mb-6 leading-relaxed text-stone-600 font-medium">
                            {serialize(node.children)}
                        </p>
                    );
                case 'heading':
                    const Tag = (node.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                    return (
                        <Tag key={i} className="font-display font-bold mb-6 mt-12 text-stone-900 leading-tight text-balance">
                            {serialize(node.children)}
                        </Tag>
                    );
                case 'list':
                    const ListTag = node.listType === 'number' ? 'ol' : 'ul';
                    return (
                        <ListTag key={i} className={`mb-6 ml-6 space-y-2 text-stone-600 font-medium ${node.listType === 'number' ? 'list-decimal' : 'list-disc'}`}>
                            {serialize(node.children)}
                        </ListTag>
                    );
                case 'listitem':
                    return (
                        <li key={i}>
                            {serialize(node.children)}
                        </li>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className="rich-text w-full max-w-none prose prose-stone">
            {serialize(content.root.children)}
        </div>
    );
}
