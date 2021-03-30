/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */


const convertStrings = (string) => {
	let converted = [];
  for (let i = 0; i < string.length; i++) {
  	if (string[i] !== "#") {
    	converted.push(string[i])
    } else if (converted.length > 0) {
    	converted.pop();
    }
  }
  if (converted.length === 0) {
  	return '';
  }
		return converted.join('')
}

const backspaceCompare = (S, T) => {
    let newStr1 = convertStrings(S);
  let newStr2 = convertStrings(T);
  return newStr1 === newStr2;
	
}