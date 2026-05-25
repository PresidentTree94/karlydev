export const homepageQuery = `
  *[_type == "homepage"][0]{
    availability,
    headingMain,
    headingAccent,
    subheading,
    services[]{
      title,
      description,
      icon,
      boxBackground,
      iconBackground,
      iconColor
    },
    terms[]{
      title,
      description,
      icon
    }
  }
`;

export const pricingQuery = `
  *[_type == "pricingpage"][0]{
    baseprice,
    build,
    modules[]{
      id,
      title,
      icon,
      isBuild,
      description,
      price,
      multiple,
      dependsOn,
      disabledBy
    }
  }
`;

export const faqQuery = `
  *[_type == "faqpage"][0]{
    faqs[]{
      question,
      answer
    }
  }
`;