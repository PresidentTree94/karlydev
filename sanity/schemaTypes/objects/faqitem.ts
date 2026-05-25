import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqitem",
  type: "object",
  fields: [
    defineField({
      name: "question",
      type: "string"
    }),
    defineField({
      name: "answer",
      type: "text"
    })
  ]
})