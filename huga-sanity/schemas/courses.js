import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import slugify from 'slugify'

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
  name: 'courses',
  title: 'Cursos',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'courses'}),
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
      validation: (Rule) => Rule.required().error('La disponibilidad es obligatoria'),
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
      name: 'courseIntroducingVideo',
      title: 'Video de Introducción del Curso',
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
      name: 'duration',
      title: 'Duración',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      options: {
        list: months,
      },
    },
    {
      name: 'topics',
      title: 'Tópicos',
      type: 'text',
    },
    {
      name: 'goals',
      title: 'Objetivos',
      type: 'text',
    },
    {
      name: 'targetAudience',
      title: 'Público Objetivo',
      type: 'text',
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
    },
    {
      name: 'start',
      title: 'Inicio',
      type: 'string',
    },
    {
      name: 'enrollment',
      title: 'Matrícula',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'asyncCourseAvailability',
      title: '¿El curso tiene acceso asincrónico?',
      type: 'boolean',
      options: {
        layout: 'radio',
        list: [
          {title: 'Sí', value: true},
          {title: 'No', value: false},
        ],
      },
    },
    {
      name: 'asyncCoursePrice',
      title: 'Valor del Curso Asincrónico',
      type: 'number',
      hidden: ({document}) => !document?.asyncCourseAvailability,
    },
    {
      name: 'paymentUrl',
      title: 'Link de pago',
      type: 'string',
    },
    {
      name: 'asyncCoursePaymentUrl',
      title: 'Link de pago (Curso Asincrónico)',
      type: 'string',
      hidden: ({document}) => !document?.asyncCourseAvailability,
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
