// +layout.ts
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
  // just pass along layout data to the frontend
  return data;
};
