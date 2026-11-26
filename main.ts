const fs = require('fs');
const path = require('path');

const line = "Subject offers groveling apologies to my API before demanding a total repeal of causality; Performance Review: Psychotic.";

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), line + '\n');
