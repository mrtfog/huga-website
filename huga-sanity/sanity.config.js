import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'huga-sanity',

  projectId: 'uwepa74z',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Páginas')
          .items([
            orderableDocumentListDeskItem({
              type: 'home',
              title: '📄 Home',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'socialMedia',
              title: '⚙️ Redes Sociales',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'portfolio',
              title: '⚙️ Portafolio',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'services',
              title: '⚙️ Servicios',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'courses',
              title: '⚙️ Cursos',
              S,
              context,
            }),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
