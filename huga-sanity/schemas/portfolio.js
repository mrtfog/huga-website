import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

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
        list: [...Array(new Date().getFullYear() - 2010).keys()].map((i) => ({
          title: `${i + 2011}`,
          value: i + 2011,
        })),
        layout: 'dropdown',
      },
    },
    {
      name: 'month',
      title: 'Mes de Lanzamiento del Proyecto',
      type: 'string',
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
