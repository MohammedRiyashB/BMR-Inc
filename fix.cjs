const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');
code = code.replace(
  /const redis = \(REDIS_URL[\s\S]*?    \};/g,
  `const memoryStore = new Map<string, string>();
const redis = (REDIS_URL && REDIS_TOKEN) 
  ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) 
  : { 
      get: async (key: string) => memoryStore.get(key) || null,
      set: async (key: string, value: any, opts?: any) => {
        memoryStore.set(key, String(value));
        if (opts?.ex) {
          setTimeout(() => memoryStore.delete(key), opts.ex * 1000);
        }
        return "OK";
      }
    };`
);
code = code.replace(/app\.listen\(PORT, "0\.0\.0\.0"/g, `app.listen(Number(PORT), "0.0.0.0"`);
fs.writeFileSync('server.ts', code);
