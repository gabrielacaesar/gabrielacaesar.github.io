// ur api key created on google cloud: https://console.cloud.google.com/apis/credentials
const API_KEY = 'AIzaSyB2FlJwoNn1JKC8hTUkrUY2jGSGYHfNaVY'
// id of ur google spreadsheet: https://docs.google.com/spreadsheets/d/{GET THIS CODE HERE}
const sheets_id = '1vLUSNopvutHwCUDWbN1KaykyqGIFeAqDhlDGOPZDyqQ'
// name of ur worksheet
// quickstart; default content - https://developers.google.com/sheets/api/quickstart/js
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']
// element where you can to add dynamic content
const qua_ul = document.querySelector('.qua-ul') // qualification
const exp_ul = document.querySelector('.exp-ul') // experience

// bio - qualification
let bio_quali = {
    spreadsheetId : sheets_id, // get ur sheets id added above
    range : 'bio' // get the name of ur worksheet added above
}

// bio - experience
let bio_exp = {
    spreadsheetId : sheets_id, // get ur sheets id added above
    range : 'bio-exp' // get the name of ur worksheet added above
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
function gapiLoaded() {
    gapi.load( 'client', intializeGapiClient ) // default content
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
async function intializeGapiClient() {
    await gapi.client.init( {
        apiKey: API_KEY, // get ur api key added above
        discoveryDocs: DISCOVERY_DOCS, // default content
    } );

    // bio qualification
    gapi.client.sheets.spreadsheets.values.get( bio_quali ) // get the variable created above
            .then( response => mostrar_quali( response.result.values )) // get the values of the worksheet

    // bio experience
    gapi.client.sheets.spreadsheets.values.get( bio_exp ) // get the variable created above
            .then( response => mostrar_exp( response.result.values )) // get the values of the worksheet

}

function mostrar_quali(quali_lista) {

    // skip first row
    quali_lista.shift()

    for ( let item of quali_lista ) { // get each row

        let li = document.createElement( 'li' ) // create a li element
        li.classList.add('qua')
        
        let quali_quando  = item[ 0 ] // first column of first row; then first column of second row...
        let quali_oque = item[ 1 ] // second column of first row; then second column of second row...
        let quali_onde  = item[ 2 ] // third column of first row; then third column of second row...

        li.textContent = `${ quali_quando } - ${ quali_oque } | ${ quali_onde }` // add the content considering this pattern
    
        qua_ul.append(li) // add this li to ul element

       
    }

}

function mostrar_exp(exp_lista) {

    // skip first row
    exp_lista.shift()

    for ( let item of exp_lista ) { // get each row

        let li = document.createElement( 'li' ) // create a li element
        li.classList.add('exp')
        
        let exp_quando  = item[ 0 ] // first column of first row; then first column of second row...
        let exp_oque = item[ 1 ] // second column of first row; then second column of second row...
        let exp_onde  = item[ 2 ] // third column of first row; then third column of second row...

        li.textContent = `${ exp_quando } - ${ exp_oque } | ${ exp_onde }` // add the content considering this pattern
    
        exp_ul.append(li) // add this li to ul element

    }

}

