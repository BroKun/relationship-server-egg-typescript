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
    required: false,
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

export function isUser(user: Relationship.User): user is Relationship.User {
  return user && ((user as Relationship.User)._id.length > 0) && ((user as Relationship.User).openId.length > 0);
}
export function isRegular(user: Relationship.User): user is Relationship.User {
  return user && (user._id.length > 0) && (user.openId.length > 0) && (user.type >= 1);
}
