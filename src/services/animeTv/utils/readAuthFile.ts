import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function readAuthFile() {
  const filePath = path.join(
    process.cwd(),
    'src',
    'services',
    'animeTv',
    'data',
    'auth.dat',
  );

  return readFile(filePath);
}
