import './index.scss';

import { TestPluginPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new TestPluginPlugin();
}
export { TestPluginPluginSetup, TestPluginPluginStart } from './types';
