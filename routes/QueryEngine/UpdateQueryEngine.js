exports.UpdateQueryStatements = function (Key, Values) {
    var Query = '';
    
    switch (Key) { 
        case 'Roles':
            Query = 'UPDATE tbl_Roles SET RoleName= ? where RoleID= ?';
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