const getReuqestKeys = (fieldName) => {
  let lastUnderscoreIndex = fieldName?.lastIndexOf("_");
  if (lastUnderscoreIndex !== -1) {
    let field = fieldName.substring(0, lastUnderscoreIndex + 1);
    let newKey = fieldName.substring(lastUnderscoreIndex + 1);
    return { field, newKey };
  }
};

export const useManageAddress = () => {
  const serializeAddresses = (formFields) => {
    const physicalAddressDict = {};
    const mailingAddressDict = {};

    for (const key in formFields) {
      if (key.startsWith("physical_address_")) {
        console.log("fieldName", formFields[key]);

        const { newKey } = getReuqestKeys(key);
        physicalAddressDict[newKey] = formFields[key];
        delete formFields[key];
      }
      if (key.startsWith("mailing_address_")) {
        const { newKey } = getReuqestKeys(key);
        mailingAddressDict[newKey] = formFields[key];
        delete formFields[key];
      }
    }
    return { physicalAddressDict, mailingAddressDict };
  };

  return { serializeAddresses };
};
