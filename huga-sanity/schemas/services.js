import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import slugify from 'slugify'

export default {
  name: 'services',
  title: 'Servicios',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'services'}),
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
      name: 'serviceIntroducingVideo',
      title: 'Video de Introducción del Servicio',
      description: 'Recomendación: Peso inferior a 50MB y formato .webm/.mp4',
      type: 'file',
      options: {
        accept: 'video/*',
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
      type: 'text',
    },
    {
      name: 'benefits',
      title: 'Beneficios',
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
    },
    {
      name: 'modules',
      title: 'Módulos',
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
