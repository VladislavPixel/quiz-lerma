import { allPathsRouter, HOME_PATH } from '../routes';

function getMaximumMatchPathRouter(path: string): string {
	let resultPath = HOME_PATH;

	for (const valuePath of allPathsRouter) {
		if (path.startsWith(valuePath)) {
			resultPath = valuePath;

			break;
		}
	}

	return resultPath;
};

export { getMaximumMatchPathRouter };
