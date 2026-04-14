import * as XLSX from 'xlsx';

export const downloadExcel = (data: unknown[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Invoices");
  
  // Triggers the download
  XLSX.writeFile(workbook, "Ironclad_Financial_Report.xlsx");
};