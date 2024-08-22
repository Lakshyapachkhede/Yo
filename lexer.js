export default function lexer(input) {
    const tokens = []
    let cursor = 0;

    while (cursor < input.length) {
        let char = input[cursor];

        // skip whitespace
        if (/\s/.test(char)) {
            cursor++;
            continue;
        }

        // skip comments
        if (char === '/' && input[cursor + 1] === '/'){
            while (cursor < input.length && input[cursor] !== '\n') {
                cursor++;
            }
            continue;
        }

        // strings
        if (char === '"'){
            let string = '';
            cursor++;
            while(cursor < input.length && input[cursor] !== '"'){
                string += input[cursor];
                cursor++;
                
            }
            cursor++;
            tokens.push({ type: 'string', value: string})
            continue;
        }


        //handle identifier and keywords
        if (/[a-zA-Z]/.test(char)) { 
            let word = "";
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char;
                char = input[++cursor]
            }

            if (word === 'yo' || word === 'shout' || word === 'fr' || word === 'nah') {
                tokens.push({ type: 'keyword', value: word});
            } else {
                tokens.push({ type: 'identifier', value: word})
            }

            continue;
        }

        //handle numbers
        if (/[0-9]/.test(char)) {
            let num = '';
            while(/[0-9]/.test(char)) { 
                num += char;
                char = input[++cursor];
            }
            tokens.push({ type: 'number', value: parseInt(num)});
            continue;
        }
        
        //handle operators
        if (/[\+\-\*\/=]/.test(char)) {
            tokens.push({ type: 'operator', value: char});
            cursor++;
            continue;
        }

        //handle punctuation
        if (/[\(\)\{\}]/.test(char)) {
            tokens.push({ type: 'punctuation', value: char});
            cursor++;
            continue;
        }

    }
    
    console.log(tokens);
    return tokens;

}
