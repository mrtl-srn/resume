import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names into a single string.
 *
 * @example
 * cn('text-red-500', 'hover:text-blue-500'); // 'text-red-500 hover:text-blue-500'
 *
 * @param {...ClassValue} args - The class names to merge.
 * @returns {string} The merged class names as a single string.
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

/**
 * Checks if an object is empty.
 *
 * This function checks if the object has no keys and
 * if it is an object created by the Object constructor.
 *
 * @example
 * const obj = {};
 * isEmptyObject(obj); // true
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} `true` if the object is empty, `false` otherwise.
 */
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function groupBy<T>(
  iterable: Iterable<T>,
  fn: (item: T) => string | number
) {
  return [...iterable].reduce<Record<string, T[]>>((groups, curr) => {
    const key = fn(curr);
    const group = groups[key] ?? [];
    group.push(curr);
    return { ...groups, [key]: group };
  }, {});
}
