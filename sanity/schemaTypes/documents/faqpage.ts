import { defineType, defineField } from "sanity";
import faqitem from "../objects/faqitem";

export default defineType({
  name: "faqpage",
  title: "FAQ Page",
  type: "document",
  fields: [
    defineField({
      name: "faqs",
      type: "array",
      of: [{ type: "faqitem" }]
    })
  ]
})