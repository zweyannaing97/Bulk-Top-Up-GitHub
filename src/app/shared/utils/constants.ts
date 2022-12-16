export const menuItems = [

  {
    displayName: 'Dashboard',
    route: 'dashboard',
    iconName: '../../../../../../assets/icons/Dashboard.svg',
    children: []
  },
  {
    displayName: 'User Role Master',
    route: '',
    iconName: '../../../assets/icons/Master.svg',
    children: [
      {
        displayName: 'Company',
        route: 'user-role-master/company-listing',
        iconName: '../../../assets/icons/Company.svg',
        children: []
      },
      {
        displayName: 'Department',
        route: 'user-role-master/department',
        iconName: '../../../assets/icons/Department.svg',
        children: []
      },
      {
        displayName: 'Designation',
        route: 'user-role-master/designation',
        iconName: '../../../assets/icons/Designation.svg',
        children: []
      },
    ]
  },
  {
    displayName: 'User Role Permission',
    route: 'user-role-permission',
    iconName: '../../../assets/icons/User Role Permission.svg',
    children: []
  },
  {
    displayName: 'Telecom Masters',
    route: '',
    iconName: '../../../assets/icons/Telecom Master.svg',
    children: [
      {
        displayName: 'Telecom',
        route: 'telecom-masters/telecom-listing',
        iconName: '../../../assets/icons/Telecom.svg',
        children: []
      },
      {
        displayName: 'Telecom Service Type',
        route: 'telecom-masters/telecom-service-type',
        iconName: '../../../assets/icons/Telecom Service Type.svg',
        children: []
      },
      {
        displayName: 'Service Type Configuration',
        route: 'telecom-masters/service-type-configuration',
        iconName: '../../../assets/icons/Service Type Configuration.svg',
        children: []
      },
      {
        displayName: 'Telecom Price',
        route: 'telecom-masters/telecom-price',
        iconName: '../../../assets/icons/Telecom Price.svg',
        children: []
      },
    ]
  },
  {
    displayName: 'Process',
    route: '',
    iconName: '../../../assets/icons/Process.svg',
    children: [
      {
        displayName: 'Single Top Up',
        route: 'process/single-top-up',
        iconName: '../../../assets/icons/Single Top Up.svg',
        children: []
      },
      {
        displayName: 'Multiple Top Up',
        route: 'process/multiple-top-up',
        iconName: '../../../assets/icons/Multiple Top Up.svg',
        children: []
      },
      {
        displayName: 'Bulk Top Up',
        route: 'process/bulk-top-up',
        iconName: '../../../assets/icons/Bulk Top Up.svg',
        children: []
      },
    ]
  },
  {
    displayName: 'Report',
    route: '',
    iconName: '../../../assets/icons/Report.svg',
    children: [
      {
        displayName: 'Report Details',
        route: 'report/report-details',
        iconName: '../../../assets/icons/Clipboard.svg',
        children: []
      },
      {
        displayName: 'Transaction Detail By Date',
        route: 'report/transaction-detail',
        iconName: '../../../assets/icons/Transaction Detail By Date.svg',
        children: []
      },
    ]
  },
  {
    displayName: 'Change Password',
    route: 'change-pswrd',
    iconName: '../../../assets/icons/Change Password.svg',
    children: []
  },
  {
    displayName: 'Logout',
    route: 'logout',
    iconName: '../../../assets/icons/Logout.svg',
    children: []
  },

]
