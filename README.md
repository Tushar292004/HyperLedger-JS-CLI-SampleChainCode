# hyperledger-chaincode

A CLI tool that provides ready-to-use Hyperledger Fabric chaincode templates. This package helps developers quickly bootstrap their blockchain applications with pre-built smart contract templates.

## Features

- Interactive template selection
- Multiple chaincode templates available:
  - Credential Verification System
  - Employee Payroll Management
  - FabCar (Vehicle Management)
  - Library Management System
  - P2P Fund Transfer
  - Property Registration System
  - Student Management System

## Installation & Usage

You can use this package in two ways:

### 1. Using npx (Recommended)

```bash
# Create a new directory for your project
mkdir my-chaincode-project
cd my-chaincode-project

# Run the template generator
npx hyperledger-chaincode
```

### 2. Global Installation

```bash
# Install globally
npm install -g hyperledger-chaincode

# Create a new directory for your project
mkdir my-chaincode-project
cd my-chaincode-project

# Run the template generator
hyperledger-chaincode
```

## Available Templates

1. **CredentialVerification**: A chaincode for managing and verifying credentials/certificates
2. **EmployeePayroll**: Manage employee salary and payment records on blockchain
3. **FabCar**: The classic Hyperledger Fabric car management example
4. **Library**: A library management system with book tracking
5. **P2PFund**: Peer-to-peer fund transfer system
6. **RegisterationProperty**: Property registration and ownership tracking
7. **StudentManagement**: Student record management system

## Template Usage

After generating the templates:
{Its a simulation based on Javascript Code for Hyperledger Network you have to write authentic Chaincode using Hyperledger API}
1. Each template is a standalone Hyperledger Fabric chaincode
2. You can deploy them directly to your Hyperledger Fabric network
3. Each chaincode includes basic CRUD operations and specific business logic
4. Modify the code according to your specific requirements

## Requirements

- Node.js 12.x or higher
- npm 6.x or higher
- A running Hyperledger Fabric network (for deployment)

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT

## Support

For support, issues, or feature requests, please file an issue in the GitHub repository.
