export default function parser(tokens) {
    const ast = {
        type: 'Program',
        body: []
    };

    while (tokens.length > 0) {
        let token = tokens.shift();

        if (token.type === "keyword" && token.value === 'yo') {
            let declaration = {
                type: "Declaration",
                name: tokens.shift().value,
                value: null
            };

            if (tokens[0].type === 'operator' && tokens[0].value === '=') {
                tokens.shift(); //consume '='
                //parse the expression

                let expression = '';
                while (tokens.length > 0 && tokens[0].type !== 'keyword') {
                    expression += tokens.shift().value;
                }
                declaration.value = expression.trim();
            }

            ast.body.push(declaration);

        } else if (token.type === 'keyword' && token.value === 'shout') {
            let nextToken = tokens.shift();
            ast.body.push({
                type: 'Print',
                expression: nextToken.value,
                isString: nextToken.type === "string"
            });
        }
        console.log(ast);
        return ast;

    }
}


