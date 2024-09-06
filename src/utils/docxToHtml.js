import mammoth from 'mammoth';

export const convertDocxToHTML = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });

    // Wrap the result in a full HTML document structure
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Converted Document</title>
        </head>
        <body>
          ${result.value}
        </body>
      </html>
    `;

    return htmlContent; // This is the full HTML string
  } catch (error) {
    console.error('Error during conversion:', error);
    throw error;
  }
};
