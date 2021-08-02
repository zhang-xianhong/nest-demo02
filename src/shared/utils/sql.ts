export type LikePattern = '%value%' | '%value' | 'value%';

const addSlashes = (string = '') => string.replace(/[_%[\]]/g, match => `\\${match}`);

/**
 * 转义模糊查询
 * 防止注入
 * @param keyword
 * @param pattern
 * @returns
 */
export const escapeLike = (keyword: string, pattern: LikePattern = '%value%') => {
  const value = addSlashes(keyword);
  return pattern.replace('value', value);
};


