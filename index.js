import compiler from './compiler.js';
import runner from './runner.js';



const code = `


yo x = 20
yo y = 10
// its a comment

yo sum = x + y
shout sum
shout "Hello"
fr(x > y){
    shout "x is greater than y"
} nah {
    shout "y is greater than x"
}





`
const exec = compiler(code);
runner(exec)