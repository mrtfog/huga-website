import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'blogCategories',
  title: 'Categorías de Blog',
  type: 'document',
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({type: 'blogCategories'}),

    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Category Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
}
