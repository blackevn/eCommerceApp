import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({

  name: 'default',
  title: 'ifeelSanity',

  projectId: '4zeblw8d',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {

    types: schemas

  },
  
})
