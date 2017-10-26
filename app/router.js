"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    /**
     * tokens
     * POST /tokens
     */
    app.resources('tokens', '/api/v1/tokens', 'tokens');
    /**
     * users
     * POST /users
     * GET /users/:userid
     * PUT /users/:userid
     * GET /users{?page,per_page,order,sort}
     */
    app.resources('users', '/api/v1/users', 'users');
    /**
     * teaching
     * POST /users/teaching/:userid
     * DELETE /users/teaching/:userid
     * GET /user/:master/teaching/:apprentices
     */
    app.post('teaching_create', '/api/v1/users/teaching/:id/', 'teaching.create');
    app.delete('teaching_delete', '/api/v1/users/teaching/:id/', 'teaching.destroy');
    app.get('teaching_check', '/user/:master/teaching/:apprentices', 'teaching.check');
    /**
     * starring
     * POST /users/starred/:userid
     * DELETE /users/starred/:userid
     * GET /user/:userid/starred/:otheruser
     * GET /user/:userid/starred?{page,per_page,order,sort}
     * GET /user/:userid/stargazers?{page,per_page,order,sort}
     */
    app.post('starred_create', '/users/starred/:id', 'starring.create');
    app.delete('starred_delete', '/users/starred/:id', 'starring.destroy');
    app.get('starred_check', '/user/:stargazer/starred/:starred', 'starring.check');
    app.get('starred_index', '/user/:id/starred?{page,per_page,order,sort}', 'starring.show');
    app.get('stargazers', '/user/:id/stargazers?{page,per_page,order,sort}', 'starring.stargazers');
    /**
     * apprentices
     * GET /user/:userid/apprentices
     */
    app.get('apprentices_index', '/user/:id/apprentices', 'apprentices.index');
    /**
     * masters
     * GET /user/:userid/masters
     */
    app.get('masters_index', '/user/:id/masters', 'masters.index');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNwQzs7O09BR0c7SUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRDs7Ozs7O09BTUc7SUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQ7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSw2QkFBNkIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pGLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUscUNBQXFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVuRjs7Ozs7OztPQU9HO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxtQ0FBbUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hGLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDhDQUE4QyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFGLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGlEQUFpRCxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFFaEc7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNFOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyJ9