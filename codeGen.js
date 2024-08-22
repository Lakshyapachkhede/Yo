export default function codeGen(node) {
    switch (node.type) {
        case 'Program': return node.body.map(codeGen).join("\n");
        case "Declaration": return `const ${node.name} = ${node.value}`;
        case "Print":
            if (node.isString){
                return `console.log("${node.expression}")`;
            } else{
                return `console.log(${node.expression})`;
            }


    }
}