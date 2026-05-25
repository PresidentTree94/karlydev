import { defineType, defineField } from "sanity";

export default defineType({
  name: "moduleitem",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string"
    }),
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "icon",
      type: "string"
    }),
    defineField({
      name: "isBuild",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "description",
      type: "text"
    }),
    defineField({
      name: "price",
      type: "number"
    }),
    defineField({
      name: "multiple",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "dependsOn",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "disabledBy",
      type: "string"
    })
  ]
})