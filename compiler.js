import lexer from './lexer.js';
import parser from './ast.js';
import codeGen from './codeGen.js';


export default function compiler(input) {
    const tokens = lexer(input);
    const ast = parser(tokens);
    const executableCode = codeGen(ast);
    return executableCode;
}


