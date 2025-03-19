import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {workflow} from 'sanity-plugin-workflow'
import {visionTool} from '@sanity/vision'

import {structure} from './structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Showcase Workflow',

  projectId: 'zupqbrei',
  dataset: 'production',

  plugins: [
    deskTool(
      {structure}
      ),
    workflow({
      schemaTypes: [`post`, `product`],
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
