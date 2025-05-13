export const largeNumberFormat = (value:number, scale?:string) => {

    if(scale === "M"){
        value = value * 1_000_000;
    }else if(scale === "K"){
        value = value * 1_000;
    }

    if (value >= 1_000_000_000_000) {
        return (value / 1_000_000_000_000).toFixed(2) + 'T';
    } else if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(2) + 'B';
    } else if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(2) + 'M';
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(2) + 'K';
    } else {
        return value.toString();
    }
}

