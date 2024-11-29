import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

// --- DOCUMENT TYPES ---
const HERO = 'hero'
const ABOUT = 'about'
const PORTFOLIO = 'portfolio'
const BLOG = 'blog'
const COURSES = 'courses'
const SERVICES = 'services'
const CONTACT = 'contact'
const WORKPLAN = 'work-plan'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'home'}),
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [HERO, ABOUT, PORTFOLIO, CONTACT, SERVICES, COURSES, WORKPLAN, BLOG],
      },
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      hidden: ({document}) => document.type !== HERO,
    },
    {
      name: 'courses',
      title: 'Cursos',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'courses'}],
        },
      ],
      options: {
        limit: 6,
      },
      hidden: ({document}) => document.type !== COURSES,
    },
    {
      name: 'blogs',
      title: 'Blogs Destacados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}],
        },
      ],
      options: {
        limit: 6,
      },
      hidden: ({document}) => document.type !== BLOG,
    },
    {
      name: 'services',
      title: 'Servicios',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'services'}],
        },
      ],
      options: {
        limit: 9,
      },
      hidden: ({document}) => document.type !== SERVICES,
    },
    {
      name: 'portfolio',
      title: 'Portafolio',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'portfolio'}],
        },
      ],
      hidden: ({document}) => document.type !== PORTFOLIO,
    },
  ],
  preview: {
    select: {
      title: 'type',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
