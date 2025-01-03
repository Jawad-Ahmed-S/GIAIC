const BlogSchemas={
  name: 'Blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'Published',
      type: 'datetime',
      title: 'Published Date',
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster',
      options: {
        hotspot: true, 
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Background Image Caption',
        },
      ],
    },
    {
      name: 'Content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block', // For paragraphs and headings
          title: 'Text Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image', // For images within the content
          title: 'Image',
          options: {
            hotspot: true, // Allows users to crop the image
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
            },
          ],
        },
      ],
    },
  ],
};
export default BlogSchemas;