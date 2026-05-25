import { defineType, defineField } from "sanity";
import moduleitem from "../objects/moduleitem";

export default defineType({
  name: "pricingpage",
  title: "Pricing Page",
  type: "document",
  fields: [
    defineField({
      name: "baseprice",
      type: "number"
    }),
    defineField({
      name: "build",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "modules",
      type: "array",
      of: [{ type: "moduleitem" }]
    })
  ]
})