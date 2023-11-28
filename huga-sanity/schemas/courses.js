import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'courses',
  title: 'Cursos',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'courses'}),
    {
      name: 'image',
      title: 'Imágen',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'temario',
      title: 'Temario',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'available',
      title: 'Disponible',
      type: 'string',
      options: {
        list: ['Sí', 'No'],
      },
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
