export function splitStringByLine(string: string): string[] {
    // return string.split(/\n/);
    const splitString = string.split(/\r?\n/);
    let output: string[] = [];
    splitString.forEach((i) => output.push(i.trim()));
    return output;
}

export function splitStringByChar(string: string): string[] {
    return string.split('');
}
