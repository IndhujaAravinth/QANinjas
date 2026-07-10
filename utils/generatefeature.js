import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workbookPath = path.join(__dirname, '..', 'test-data', 'gherkins.xlsx');
const workbook = XLSX.readFile(workbookPath);

function generateFeature(sheetName, outputFileName) {

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Worksheet '${sheetName}' not found in ${workbookPath}`);
    }

    const rows = XLSX.utils.sheet_to_json(worksheet);

    let featureText = '';
    let currentFeature = '';
    let currentScenario = '';

    for (const row of rows) {

        if (row.Feature !== currentFeature) {
            currentFeature = row.Feature;
            featureText += `Feature: ${currentFeature}\n\n`;
        }

        if (row.Scenario !== currentScenario) {
            currentScenario = row.Scenario;
            featureText += `Scenario: ${currentScenario}\n`;
        }

        featureText += `  ${row.Keyword} ${row.Step}\n`;
    }

    const outputPath = path.join(
        __dirname,
        '..',
        'features',
        outputFileName
    );

    fs.writeFileSync(outputPath, featureText);

    console.log(`${outputFileName} generated successfully.`);
}

generateFeature('Login', 'loginpage.feature');
generateFeature('Accounts', 'accountspage.feature');