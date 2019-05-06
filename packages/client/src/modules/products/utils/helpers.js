/* eslint-disable */
const removeVendorName = str => {
  return str.replace(new RegExp(/^(Life Fitness|Precor|Inspire Fitness|Spirit|StairMaster|Helix|BodyCraft|DKN Technology|Apollo Athletics|Bosu|Cascade Health & Fitness|Cybex|GoFit|Green Series|Ivanko Engineered Passion|Merrithew|PowerBlock|Regupol America|SPRI|SuperMats|Teeter Hang Ups|BH Fitness)\s+/, 'gmi'), "");
}

export default removeVendorName;
