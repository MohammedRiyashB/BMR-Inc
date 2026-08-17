const fs = require('fs');
let code = fs.readFileSync('src/components/Contact.tsx', 'utf-8');
code = code.replace(/const handleChange = \(e: any\) => \{/g, 'const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {');
code = code.replace(/const handleSubmit = async \(e: any\) => \{/g, 'const handleSubmit = async (e: React.FormEvent) => {');
fs.writeFileSync('src/components/Contact.tsx', code);
