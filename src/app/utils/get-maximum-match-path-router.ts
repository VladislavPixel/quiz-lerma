import { allPathsRouter } from '../routes';

function getMaximumMatchPathRouter(path: string): string {
   let resultPath = '/';

   for (const valuePath of allPathsRouter) {
      if (path.startsWith(valuePath)) {
         resultPath = valuePath;

         break;
      }
   }

   return resultPath;
};

export { getMaximumMatchPathRouter };
