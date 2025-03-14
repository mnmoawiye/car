// Function to run when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Data for our table
    const carData = [
        ['Car', 'Top', 'Price'],
        ['Chevrolet', '120mph', '$10,000'],
        ['Pontiac', '140mph', '$20,000']
    ];
    
    // Create a table element
    const table = document.createElement('table');
    
    // Loop through the data to create rows and cells
    carData.forEach((rowData, rowIndex) => {
        // Create a row
        const row = document.createElement('tr');
        
        // Create cells for this row
        rowData.forEach((cellData) => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        
        // Add the row to the table
        table.appendChild(row);
    });
    
    // STYLE METHOD 1: Using the style object
    // Style 1: Add a border to the entire table
    table.style.border = '2px solid #3498db';
    table.style.borderCollapse = 'collapse';
    
    // Style 2: Set font family and size for the table
    table.style.fontFamily = 'Arial, sans-serif';
    table.style.fontSize = '18px';
    
    // STYLE METHOD 2: Using setAttribute()
    // Style 3: Add background color to header row
    table.setAttribute('cellpadding', '10');
    
    // Style 4: Add a border radius to the table
    table.setAttribute('class', 'styled-table');
    
    // Create and add CSS for the class we just added
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .styled-table {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 20px auto;
            width: 80%;
        }
        .styled-table tr:first-child {
            background-color: #3498db;
            color: white;
            font-weight: bold;
        }
        .styled-table td {
            border: 1px solid #ddd;
            text-align: center;
        }
        .styled-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .styled-table tr:hover {
            background-color: #e3f2fd;
        }
    `;
    
    // Add the style and table to the document
    document.head.appendChild(styleElement);
    document.body.appendChild(table);
    
    // Add a title above the table
    const title = document.createElement('h2');
    title.textContent = 'Car Comparison Table';
    title.style.textAlign = 'center';
    title.style.color = '#3498db';
    document.body.insertBefore(title, table);
});