const sizes = {
  B: 1,
  KB: 1000,
  MB: 1000000,
  GB: 1.0e9,
  TB: 1.0e12,
  PB: 1.0e15,
  '??': 1,
} as const;

/**
 * f :: number -> string
 *
 * Recebe o valor absoluto em bytes e retorna a
 * unidade de medida em bytes na escala mais apropriada
 */
const getSizeUnityScale = (absoluteValue: number) => {
  if (absoluteValue < sizes.KB) {
    return 'B';
  }
  if (absoluteValue < sizes.MB) {
    return 'KB';
  }
  if (absoluteValue < sizes.GB) {
    return 'MB';
  }
  if (absoluteValue < sizes.TB) {
    return 'GB';
  }
  if (absoluteValue < sizes.PB) {
    return 'TB';
  }

  return '??';
};

type ConversionUnitys = keyof typeof sizes;
const changeUnityScale = (targetScale: ConversionUnitys) => (value: number) =>
  value / sizes[targetScale];
const convertSizeUnity =
  // uma função que recebe o valor e retorna a unidade


    (b: (a: number) => ConversionUnitys) =>
    // recebe uma função para ajustar a escala
    (value: (v: ConversionUnitys) => (a: number) => number) =>
    // o valor absoluto a ser convertido
    (absoluteValue: number) => {
      const unity = b(absoluteValue);
      return `${value(unity)(absoluteValue)
        .toFixed(2)
        .replace('.', ',')} ${unity}`;
    };

export const convertByteUnitys =
  convertSizeUnity(getSizeUnityScale)(changeUnityScale);
