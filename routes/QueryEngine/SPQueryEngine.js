exports.GetQueryStatements = function (Key, Values) {
    var Query = '';
    
    switch (Key) { 
        case 'Roles':
            Query = "CALL SP_SelectRoles('"+ Values +"')";
            break;
        case 'RandomCode':
            Query = "CALL SP_RandomCode()";
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