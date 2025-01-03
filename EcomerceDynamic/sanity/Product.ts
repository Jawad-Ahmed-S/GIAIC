const ProductSchemas = {
  name: 'Product',
  type: 'document',
  title: 'Product',
  fields: [
    {
  title: 'Poster',
  name: 'poster',
  type: 'image',
  options: {
    hotspot: true 
  },
    },
    {
      name: 'productname',
      type: 'string',
      title: 'Product Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'price', // Corrected lowercase
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required().min(0) // Non-negative validation
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
     {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
   fields: [
        {
          name: 'height',
          type: 'number',
          title: 'Height',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'width',
          type: 'number',
          title: 'Width',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'depth',
          type: 'number',
          title: 'Depth',
          validation: (Rule) => Rule.required().min(0),
        },
      ],
    }
    
  ],
};

export default ProductSchemas;
