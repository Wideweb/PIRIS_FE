const IdentityApi = 'http://localhost:57603';

let urls = {
    identityApi: IdentityApi,
    client: IdentityApi + '/api/Client',
    getClientList: IdentityApi + '/api/Client/GetClientList',
    getClientForm: IdentityApi + '/api/Client/GetClientForm',

    closeBankDay: IdentityApi + '/api/Bank/CloseBankDay',
    getBankAccount: IdentityApi + '/api/Bank/GetBankAccount',
    getBankAccountForm: IdentityApi + '/api/Bank/GetBankAccountForm',
    getBankAccountList: IdentityApi + '/api/Bank/GetBankAccountList',
    getBankDate: IdentityApi + '/api/Bank/GetBankDate',
    getAnnualReportData: IdentityApi + '/api/Bank/GetAnnualReportData',

    clientAccount: IdentityApi + '/api/ClientAccount',
    getClientAccountDeposit: IdentityApi + '/api/ClientAccount/GetClientAccountDeposit',
    getClientAccountForm: IdentityApi + '/api/ClientAccount/GetClientAccountForm',
    getClientAccountList: IdentityApi + '/api/ClientAccount/GetClientAccountList',

    deposit: IdentityApi + '/api/Deposit',
    getDepositPlanList: IdentityApi + '/api/Deposit/GetDepositPlanList',
    getDepositForm: IdentityApi + '/api/Deposit/GetDepositForm',

    getClientLookups: '/api/Lookup/GetClientLookups',
    getCurrencyLookups: '/api/Lookup/GetCurrencyLookups',
    getDepositPlanLookups: '/api/Lookup/GetDepositPlanLookups',
    getDepositTypeLookups: '/api/Lookup/GetDepositTypeLookups',
    getClientAccountLookups: '/api/Lookup/GetClientAccountLookups',
    getCreditPlanLookups: '/api/Lookup/GetCreditPlanLookups',
    getCreditTypeLookups: '/api/Lookup/GetCreditTypeLookups',

    account: IdentityApi + '/api/Account',
    getAccountTransactionList: IdentityApi + '/api/Account/GetAccountTransactionList',

    credit: IdentityApi + '/api/Credit',
    getCreditPlan: IdentityApi + '/api/Credit/GetCreditPlan',
}

export default urls;