import { type SchemaTypeDefinition } from 'sanity'
import homepage from './documents/homepage'
import pricingpage from './documents/pricingpage'
import faqpage from './documents/faqpage'
import legalpage from './documents/legalpage'
import serviceitem from './objects/serviceitem'
import moduleitem from './objects/moduleitem'
import termitem from './objects/termitem'
import faqitem from './objects/faqitem'
import legalitem from './objects/legalitem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    pricingpage,
    faqpage,
    legalpage,
    serviceitem,
    moduleitem,
    termitem,
    faqitem,
    legalitem
  ],
}
