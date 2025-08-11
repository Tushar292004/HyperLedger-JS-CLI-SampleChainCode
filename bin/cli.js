#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const templateDir = path.join(__dirname, '..', 'templates');
const currentDir = process.cwd();

async function copyTemplate(templateName) {
    try {
        const sourcePath = path.join(templateDir, `${templateName}.js`);
        const targetPath = path.join(currentDir, `${templateName}.js`);
        
        await fs.copy(sourcePath, targetPath);
        console.log(chalk.green(`✓ Created ${templateName}.js`));
    } catch (err) {
        console.error(chalk.red(`Error creating ${templateName}.js:`), err);
    }
}

async function init() {
    console.log(chalk.blue('Welcome to Hyperledger Chaincode Generator!'));
    
    const templates = [
        'CredentialVerification',
        'EmployeePayroll',
        'FabCar',
        'Library',
        'P2PFund',
        'RegisterationProperty',
        'StudentManagement'
    ];

    const { selectedTemplates } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selectedTemplates',
            message: 'Select the chaincode templates you want to generate:',
            choices: templates,
        }
    ]);

    if (selectedTemplates.length === 0) {
        console.log(chalk.yellow('No templates selected. Exiting...'));
        return;
    }

    for (const template of selectedTemplates) {
        await copyTemplate(template);
    }

    console.log(chalk.green('\nAll selected templates have been created successfully!'));
    console.log(chalk.blue('\nTo get started with your chaincode:'));
    console.log('1. Navigate to your project directory');
    console.log('2. Install dependencies: npm install');
    console.log('3. Deploy the chaincode to your Hyperledger Fabric network');
}

init().catch((err) => {
    console.error(chalk.red('Error:', err));
    process.exit(1);
});
