/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    // we know the input will always be one string split by spaces 
    // we can split the string into words
    // the last element will always end up being the first in our new string, we dont have to transform this
    // we can create a map of months, and days and preform a lookup to find what it maps to
    // we can then create a new string with our transformed inputs
    const dayMap = {
        "1st": '01', 
        "2nd": '02',
        "3rd": '03',
        "4th": '04',
        "5th": '05', 
        "6th": '06',
        "7th": '07',
        "8th": '08',
        "9th": '09', 
        "10th": '10',
        "11th": '11',
        "12th": '12',
        "13th": '13', 
        "14th": '14',
        "15th": '15',
        "16th": '16',
        "17th": '17', 
        "18th": '18',
        "19th": '19',
        "20th": '20',
        "21st": '21', 
        "22nd": '22',
        "23rd": '23',
        "24th": '24',
        "25th": '25', 
        "26th": '26',
        "27th": '27',
        "28th": '28',
        "29th": '29',
        "30th": '30',
        "31st": '31',        
        };
    const monthMap = {
        "Jan": '01',
        "Feb": '02',
        "Mar": '03',
        "Apr": '04',
        "May": '05',
        "Jun": '06',
        "Jul": '07',
        "Aug": '08',
        "Sep": '09',
        "Oct": '10',
        "Nov": '11',
        "Dec": '12'
    };
    let result = date.split(' ');
    result = result.reverse();
    result[1] = monthMap[result[1]];
    result[2] = dayMap[result[2]];
    return result.join('-');
};