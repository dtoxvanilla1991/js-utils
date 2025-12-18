export type CookieOptionValue = string | number | boolean | undefined;

export interface CookieOptions {
  maxAge?: number;
  domain?: string;
  maxCookieLength?: number;
  sameSite?: string;
  httpOnly?: boolean;
  secure?: boolean;
  path?: string;
  [key: string]: CookieOptionValue;
}

export const TWENTY_NINE_DAYS = 2505600;
export const MAX_COOKIE_LENGTH = 3000;

export const GLOBAL_COOKIE_OPTIONS: CookieOptions = {
  maxAge: TWENTY_NINE_DAYS,
  maxCookieLength: MAX_COOKIE_LENGTH,
  sameSite: "lax",
  httpOnly: true,
  path: "/",
};

export const getCookieOptions = (
  options: CookieOptions = {},
): CookieOptions => {
  return {
    ...GLOBAL_COOKIE_OPTIONS,
    ...options,
  };
};
