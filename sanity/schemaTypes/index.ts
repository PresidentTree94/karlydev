import { type SchemaTypeDefinition } from 'sanity'
import * as documentSchemas from './documents'
import * as objectSchemas from './objects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...Object.values(documentSchemas),
    ...Object.values(objectSchemas),
  ],
}
