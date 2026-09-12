import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/goura/maharashtra/public/cartoons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

async function inspect() {
  for (const file of files) {
    const img = await Jimp.read(path.join(dir, file));
    console.log(`${file}: ${img.bitmap.width}x${img.bitmap.height}`);
  }
}

inspect();
