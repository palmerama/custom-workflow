import {defineType, defineField} from 'sanity'
import {BarChartIcon} from '@sanity/icons'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          type: 'text',
          name: 'promptForImage',
          title: 'Image prompt',
          rows: 2,
          hidden: true
        }),
        defineField({
          type: 'string',
          name: 'alt',
          title: 'Alt text',
          hidden: true
        }),
      ],
      options: {
        aiAssist: {
          imageInstructionField: 'promptForImage',
          imageDescriptionField: 'alt',
        },
      },
    }),
    defineField({
      name: 'content',
      type: 'text',
      rows: 5,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },
    prepare: ({title, image}) => ({
      title,
      subtitle: 'Product',
      media: image ?? BarChartIcon
    })
  },
})
