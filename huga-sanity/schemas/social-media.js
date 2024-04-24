import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

// --- MEDIA TYPES ---
const FACEBOOK = 'facebook'
const INSTAGRAM = 'instagram'
const YOUTUBE = 'youtube'
const LINKEDIN = 'linkedin'
const BEHANCE = 'behance'
const WHATSAPP = 'whatsapp'

export default {
  name: 'socialMedia',
  title: 'Redes Sociales',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'socialMedia'}),
    {
      name: 'socialMedia',
      title: 'Red social',
      type: 'string',
      options: {
        list: [FACEBOOK, INSTAGRAM, YOUTUBE, LINKEDIN, BEHANCE, WHATSAPP],
      },
    },
    {
      name: 'mediaUrl',
      title: 'Media URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'socialMedia',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
