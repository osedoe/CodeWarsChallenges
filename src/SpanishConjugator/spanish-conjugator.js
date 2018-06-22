const conjugate = verb => {
    const obj = {};
    obj[verb] = [];
    const root = verb.substring(0,verb.length-2);
    if (verb.endsWith("ar")) {
        for (let i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    obj[verb].push(root.concat("o"));
                    break;
                case 1:
                    obj[verb].push(root.concat("as"));
                    break;
                case 2:
                    obj[verb].push(root.concat("a"));
                    break;
                case 3:
                    obj[verb].push(root.concat("amos"));
                    break;
                case 4:
                    obj[verb].push(root.concat("áis"));
                    break;
                case 5:
                    obj[verb].push(root.concat("an"));
                    break;
                default:
                    break;
            }
        }        
    } else if (verb.endsWith("er")) {
        for (let i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    obj[verb].push(root.concat("o"));
                    break;
                case 1:
                    obj[verb].push(root.concat("es"));
                    break;
                case 2:
                    obj[verb].push(root.concat("e"));
                    break;
                case 3:
                    obj[verb].push(root.concat("emos"));
                    break;
                case 4:
                    obj[verb].push(root.concat("éis"));
                    break;
                case 5:
                    obj[verb].push(root.concat("en"));
                    break;
                default:
                    break;
            }
        }        
    } else if (verb.endsWith("ir")) {
        for (let i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    obj[verb].push(root.concat("o"));
                    break;
                case 1:
                    obj[verb].push(root.concat("es"));
                    break;
                case 2:
                    obj[verb].push(root.concat("e"));
                    break;
                case 3:
                    obj[verb].push(root.concat("imos"));
                    break;
                case 4:
                    obj[verb].push(root.concat("ís"));
                    break;
                case 5:
                    obj[verb].push(root.concat("en"));
                    break;
                default:
                    break;
            }
        }        
    }
    return obj;
};

module.exports = conjugate;

// function conjugate(verb){
//     const dic = { 'ar':['o','as','a','amos', 'áis','an'],
//                   'er':['o','es','e','emos', 'éis','en'],
//                   'ir':['o','es','e','imos', 'ís', 'en']};
  
//     return { [verb]: dic[verb.slice(-2)].map(e=> verb.slice(0,-2)+e) };
//   }

