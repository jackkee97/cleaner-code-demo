roles = {
    admin: 'adminSetup()',
    driver: 'driverSetup()',
    customer: 'customerSetup()'
}

function roleWithAccess(userType) {
    return eval(roles[userType]);
}

function adminSetup() {
    return 'executedAdminSetup';
}

function driverSetup() {
    return 'executedDriverSetup';
}

function customerSetup() {
    return 'executedCustomerSetup';
}
module.exports = roleWithAccess; 