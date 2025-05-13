export const currencySymbol = (currencyCode: string| undefined) => {

    if(!currencyCode) return;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    })
      .formatToParts(1)
      .find((part) => part.type === 'currency')?.value;
  }