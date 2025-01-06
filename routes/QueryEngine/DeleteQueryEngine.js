exports.DeleteQueryStatements = function (Key, Values) {
    var Query = '';
    
    switch (Key) { 
        case 'Roles':
            Query = 'DELETE FROM tbl_Roles where RoleID = ? and RoleName= ?';
            break;
        case 'prototype':
            
            break;
        case 'mootools':
            
            break;
        case 'dojo':
            
            break;
        default:
            Query = 'Key not matched';
    }
    return Query;
};