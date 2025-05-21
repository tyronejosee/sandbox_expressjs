/**
 * Capitalizes the first letter of a string
 * @param string - The string to capitalize
 * @returns The capitalized string
 */
export function capitalizeFirstLetter(string: string): string {
  if (!string) return string;
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}
