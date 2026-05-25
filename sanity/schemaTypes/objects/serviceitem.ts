import { defineType, defineField } from "sanity";

export default defineType({
  name: "serviceitem",
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
      type: "string"
    }),
    defineField({
      name: "boxBackground",
      type: "string"
    }),
    defineField({
      name: "iconBackground",
      type: "string"
    }),
    defineField({
      name: "iconColor",
      type: "string"
    })
  ]
})