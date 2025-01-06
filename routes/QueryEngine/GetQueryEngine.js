exports.GetQueryStatements = function (Key, Values) { 
    var Query = '';
    
    switch (Key) { 
        case 'Roles':
            Query = 'SELECT * FROM tbl_Roles';
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