import { FlyDeployExecutorSchema } from './schema';

export default async function runExecutor(
  options: FlyDeployExecutorSchema,
) {
  console.log('Executor ran for FlyDeploy', options);
  return {
    success: true
  };
}

