import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function readAuthFile() {
  const fileName = 'auth.dat';
  
  const filePath = path.join(
    process.cwd(),
    'src',
    'services',
    'animeTv',
    'data',
    fileName,
  );

  return readFile(filePath);
}
