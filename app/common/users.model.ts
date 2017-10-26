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
export const userBaseSelect = {
  _id: 1,
  openId: 1,
  unionId: 1,
  nickName: 1,
  geoPosition: 1,
  avatar: 1,
  enrollmentYear: 1,
  gender: 1,
  bio: 1,
};
export const userRegularSelect = {
  _id: 1,
  openId: 1,
  unionId: 1,
  realName: 1,
  nickName: 1,
  geoPosition: 1,
  avatar: 1,
  enrollmentYear: 1,
  gender: 1,
  major: 1,
  bio: 1,
  type: 1,
};
