import fs from 'fs';
import yaml from 'js-yaml';

export function loadYaml<T>(filePath: string): T {
  const file = fs.readFileSync(filePath, 'utf8');
  return yaml.load(file) as T;
}
