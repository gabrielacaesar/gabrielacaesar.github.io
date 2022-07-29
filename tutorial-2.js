// ur api key created on google cloud: https://console.cloud.google.com/apis/credentials
const API_KEY = 'AIzaSyB2FlJwoNn1JKC8hTUkrUY2jGSGYHfNaVY'
// id of ur google spreadsheet: https://docs.google.com/spreadsheets/d/{GET THIS CODE HERE}
const sheets_id = '1vLUSNopvutHwCUDWbN1KaykyqGIFeAqDhlDGOPZDyqQ'
// name of ur worksheet
// quickstart; default content - https://developers.google.com/sheets/api/quickstart/js
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']
// element where you can to add dynamic content

// tutorial
let tutorial = {
    spreadsheetId : sheets_id, // get ur sheets id added above
    range : 'tutorial-en' // get the name of ur worksheet added above
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

    // post blog
    gapi.client.sheets.spreadsheets.values.get( tutorial ) // get the variable created above
            .then( response => mostrar_tutorial( response.result.values )) // get the values of the worksheet
}

const post = document.querySelector('.post-feed')

function mostrar_tutorial(tutorial_lista){
    tutorial_lista.shift()
    console.log(tutorial_lista)
    let post_content = ""
    for ( let item of tutorial_lista ) { // get each row
        
        const title = item[0]
        const subtitle = item[1]
        const description = item[2]
        const skills_1 = item[3]
        const skills_2 = item[4]
        const skills_3 = item[5]
        const skills_4 = item[6]
        const skills_5 = item[7]
        const skills_6 = item[8]
        const skills_7 = item[9]
        const post_link = item[10]
        const github_link = item[11]
        const img_file = item[12]

        post_content +=
        `
        <section class="bio-info-1 post-box flex row">
            <div class="post flex row">
        <div class="left-post">
            <a href="${post_link}" target="_blank">
            <h2>${title}</h2>
            <h3>${subtitle}</h3>
            <h4>${description}</h4>
        </a>
        <ul class="project-skills flex row">
        `
        if (skills_1 != '-'){
            post_content +=
        `
            <li>${skills_1}</li>
        
        `
        }
        if (skills_2 != '-'){
            post_content +=
        `
            <li>${skills_2}</li>
        
        `
        }
        if (skills_3 != '-'){
            post_content +=
        `
            <li>${skills_3}</li>
        
        `
        }
        if (skills_4 != '-'){
            post_content +=
        `
            <li>${skills_4}</li>
        
        `
        }
        if (skills_5 != '-'){
            post_content +=
        `
            <li>${skills_5}</li>
        
        `
        }
        if (skills_6 != '-'){
            post_content +=
        `
            <li>${skills_6}</li>
        
        `
        }
        if (skills_7 != '-'){
            post_content +=
        `
            <li>${skills_7}</li>
        
        `
        }
            post_content +=
        `
        </ul>
        `
        if (github_link != '-'){
            post_content +=
        `
        <a href="${github_link}" target="_blank">
            <i class="fab fa-github" alt="icon for GitHub" aria-hidden="true"></i>
        </a>
        `
        }
        post_content +=
        `
        </div>
        <div class="right-post">
            <img src="img/tutorial/${img_file}" alt="">   
        </div>
        </div>
        </section>
        `

    }
    post.innerHTML = post_content // add this html to section .feed-post
}