import { defineType, defineField } from "sanity";

export default defineType({
  name: "termitem",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "description",
      type: "text"
    }),
    defineField({
      name: "icon",
      type: "string",
    })
  ]
})