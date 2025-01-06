exports.PostQueryStatements = function (Key, Values) {
    var Query = '';
    
    switch (Key) { 
        case 'Roles':
            Query = 'INSERT INTO tbl_Roles(RoleID,RoleName,IsActive) VALUES (?,?,?)';
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