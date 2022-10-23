/** 判断是否为用户名 */
const isUsername = (str: string): boolean => {
  const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
  return pattern.test(str);
};

/** 判断是否为邮箱 */
const isEmail = (str: string): boolean => {
  const pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  return pattern.test(str);
};

/** 判断是否为手机号 */
const isPhone = (str: string): boolean => {
  const pattern = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  return pattern.test(str);
};

/** 判断是否为密码 */
function isPassword(str: string): boolean {
  const pattern = /^[\w_-]{6,16}$/;
  return pattern.test(str);
};

/** 判断是否为验证码 */
function isVCode(str: string): boolean {
  const pattern = /^[A-Za-z0-9]{4,6}$/;
  return pattern.test(str);
}

export {isUsername, isEmail, isPhone, isPassword, isVCode};
