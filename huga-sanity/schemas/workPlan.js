import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import slugify from 'slugify'

export default {
  name: 'workPlan',
  title: 'Planes de trabajo',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'workPlan'}),
    {
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      options: {
        layout: 'radio',
        list: [
          {title: 'Sí', value: true},
          {title: 'No', value: false},
        ],
      },
      validation: (Rule) => Rule.required().error('La disponibilidade es obligatoria'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => slugify(input, {lower: true, strict: true}),
      },
      validation: (Rule) => Rule.required().error('El Slug es obligatorio'),
    },
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
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'objectivePublic',
      title: 'Publico Objetivo',
      type: 'text',
    },
    {
      name: 'objective',
      title: 'Objetivo',
      type: 'text',
    },
    {
      name: 'workModality',
      title: 'Modalidad de trabajo',
      type: 'text',
    },
    {
      name: 'paymentModality',
      title: 'Modalidad de pago',
      type: 'text',
    },
    {
      type: 'array',
      name: 'includedServices',
      title: 'Servicios incluídos',
      of: [
        {
          type: 'reference',
          to: [{type: 'services'}],
        },
      ],
    },
    {
      name: 'workPlan',
      title: 'Plan de trabajo',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      options: {
        limit: 3,
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
