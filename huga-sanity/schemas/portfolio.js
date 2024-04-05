import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const FIGURINES = 'figurines'
const ESTAMPAS = 'estampas'
const ILUSTRACIONES = 'ilustraciones'
const FICHASTECNICAS = 'fichas-tecnicas'

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

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
      name: 'description',
      title: 'Descripción',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imágen',
      type: 'image',
      description: 'Recomendación: Imágen de tamaño aproximado 250x250 y formato .webp',
    },
    {
      name: 'year',
      title: 'Año',
      type: 'number',
      description: 'Selecciona el año',
      options: {
        list: [...Array(new Date().getFullYear() - 1899).keys()].map((i) => ({
          title: `${i + 1900}`,
          value: i + 1900,
        })),
        layout: 'dropdown',
      },
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      options: {
        list: months,
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
