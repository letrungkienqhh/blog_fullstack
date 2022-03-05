import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const BlogCreate = () => {
    
    const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }
      /*
       * Quill editor formats
       * See https://quilljs.com/docs/formats/
       */
      const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
      ]
    const [value, setValue] = useState('');
  return (
    <div>
            {/* <ReactQuill modules={modules} placeholder='compose here' value={value} onChange={setValue} formats={formats} theme="snow"  /> */}
            <ReactQuill theme="snow"></ReactQuill>
   
    </div>
  )
}

export default BlogCreate