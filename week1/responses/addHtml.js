export default function addHtml(response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
    <html>
        <head>
            <title>Root path</title>
            <link rel='stylesheet' type='text/css' href='styles.css'>
        </head>
        <body>
            <h1>You've added 1 to the value of <code>state</code></h1>
        </body>
    </html>
    `)
}