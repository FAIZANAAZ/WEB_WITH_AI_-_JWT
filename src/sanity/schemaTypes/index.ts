import { type SchemaTypeDefinition } from 'sanity'
import { shop_products_data } from './shop-data'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [shop_products_data],
}
