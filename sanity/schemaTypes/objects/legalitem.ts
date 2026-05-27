import { defineType, defineField } from "sanity";

export default defineType({
  name: "legalitem",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "text",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
})