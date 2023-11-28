import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'services',
  title: 'Servicios',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'services'}),
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
