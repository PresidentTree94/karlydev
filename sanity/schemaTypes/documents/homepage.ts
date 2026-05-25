import { defineType, defineField } from "sanity";
import serviceitem from "../objects/serviceitem";
import termitem from "../objects/termitem";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "availability",
      type: "boolean"
    }),
    defineField({
      name: "headingMain",
      type: "string"
    }),
    defineField({
      name: "headingAccent",
      type: "string"
    }),
    defineField({
      name: "subheading",
      type: "text"
    }),
    defineField({
      name: "services",
      type: "array",
      of: [{ type: "serviceitem" }]
    }),
    defineField({
      name: "terms",
      type: "array",
      of: [{ type: "termitem" }]
    })
  ]
})