define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/users/:master/teaching/:apprentice",
    "title": "验证师徒关系",
    "name": "teaching_check",
    "group": "teaching",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "master",
            "description": "<p>master id.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apprentice",
            "description": "<p>apprentice id.</p>"
          }
        ]
      }
    },
    "filename": "app/router.ts",
    "groupTitle": "teaching",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>There is nothing to say</p>"
          }
        ],
        "304": [
          {
            "group": "304",
            "optional": false,
            "field": "NotModified",
            "description": "<p>The resource taht have not been modified after your last call</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidId",
            "description": "<p>We find your parameter id is invalid</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  code: 'missing_field',\n  field: 'id',\n  message: 'required'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/teaching/:id",
    "title": "建立师徒关系",
    "name": "teaching_create",
    "group": "teaching",
    "permission": [
      {
        "name": "Authorized",
        "title": "Users that have signed up",
        "description": ""
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>apprentice id.</p>"
          }
        ]
      }
    },
    "filename": "app/router.ts",
    "groupTitle": "teaching",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>There is nothing to say</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidId",
            "description": "<p>We find your parameter id is invalid</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>You're not authorized yet</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  code: 'missing_field',\n  field: 'id',\n  message: 'required'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/user/teaching/:id",
    "title": "取消师徒关系",
    "name": "teaching_delete",
    "group": "teaching",
    "permission": [
      {
        "name": "Authorized",
        "title": "Users that have signed up",
        "description": ""
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>apprentice id.</p>"
          }
        ]
      }
    },
    "filename": "app/router.ts",
    "groupTitle": "teaching",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>There is nothing to say</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidId",
            "description": "<p>We find your parameter id is invalid</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>You're not authorized yet</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  code: 'missing_field',\n  field: 'id',\n  message: 'required'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    }
  }
] });
