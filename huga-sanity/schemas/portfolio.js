import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const FIGURINES = 'figurines'
const ESTAMPAS = 'estampas'
const ILUSTRACIONES = 'ilustraciones'
const FICHASTECNICAS = 'fichas-tecnicas'

export default {
  name: 'portfolio',
  title: 'Portafolio',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'portfolio'}),
    {
      name: 'socialMedia',
      title: 'Red social',
      type: 'string',
      options: {
        list: [FIGURINES, ESTAMPAS, ILUSTRACIONES, FICHASTECNICAS],
      },
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imágen',
      type: 'image',
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
