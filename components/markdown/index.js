import React from 'react';
import ReactMarkdown from 'react-markdown'
const Markdown = ({content}) => {
    return (
        <div className='prose min-h-[80vh] p-4 prose-lg'>
            <ReactMarkdown >
                {content.markdown}
            </ReactMarkdown>
        </div>
    );
}

export default Markdown;
