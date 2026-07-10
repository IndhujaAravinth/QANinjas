import XLSX from 'xlsx';

export function readExcelData(filePath, sheetName) {

    const workbook = XLSX.readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
}

