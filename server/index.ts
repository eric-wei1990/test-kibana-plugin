import { PluginInitializerContext } from '../../../src/core/server';
import { TestPluginPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new TestPluginPlugin(initializerContext);
}

export { TestPluginPluginSetup, TestPluginPluginStart } from './types';
