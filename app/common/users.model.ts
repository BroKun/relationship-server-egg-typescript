/**
 * 用户信息校验
 */
export const userValidationRule = {
  openId: 'string',
  unionId: {
    type: 'string',
    required: false,
  },
  realName: {
    type: 'string',
    required: false,
  },
  nickName: {
    type: 'string',
  },
  enrollmentYear: {
    type: 'int',
    min: 1990,
    max: 2050,
    required: false,
  },
  major: {
    type: 'string',
    required: false,
  },
  bio: {
    type: 'string',
    required: false,
  },
  avatar: {
    type: 'string',
    required: false,
  },
  type: {
    type: 'string',
    required: false,
  },
  geoPosition: {
    type: 'string',
    required: false,
  },
};
