import { defineType, defineField } from "sanity";
import legalitem from "../objects/legalitem";

export default defineType({
  name: "legalpage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" }
    }),
    defineField({
      name: "updatedAt",
      type: "datetime",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "legalitem" }]
    })
  ]
})